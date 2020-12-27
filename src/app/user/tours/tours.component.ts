import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { TourService } from 'src/app/tour.service';
import { FilterState } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent {
  filterState = new BehaviorSubject<FilterState>({
    placement: '',
    range: {
      start: new Date(new Date().setDate(new Date().getDate() - 30)),
      end: new Date()
    },
    price: 0,
  });
  tours$ = combineLatest([this.api.getTours().pipe(share()), this.filterState]).pipe(
    map(([tours, filterState]) => {
      const placement = filterState.placement.toUpperCase();
      const limit = filterState.price === 0 ? Infinity : filterState.price;

      return tours.filter(tour =>
        tour.country.toUpperCase().includes(placement)
        && ((+tour.startDate) >= (+filterState.range.start)
          && (+tour.endDate) <= (+filterState.range.end))
        && tour.price <= limit)
    }),
    map(tours => tours.map(tour => {
      const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

      const end = new Date(tour.endDate);
      const start = new Date(tour.startDate);

      const diff = Math.round(Math.abs(((+end) - (+start)) / oneDay));
      tour.duration = diff;

      return tour;
    })));

  constructor(private readonly api: TourService, private dialog: NbDialogService, private toastr: NbToastrService) { }

  handleSearch(state: FilterState) {
    this.filterState.next(state);
  }

  handleOrder(template: TemplateRef<any>) {
    const form = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      description: new FormControl()
    });

    this.dialog.open(template, {
      context: {
        form
      }
    }).onClose.subscribe(result => {
      if (result) {
        this.api.addOrder({
          ...form.value,
          status: 'IN_PROGRESS'
        });

        this.toastr.success('Ваша заявка успешно создана', 'Успешно');
      }
    });
  }
}