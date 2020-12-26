import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TourService } from '../tour.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToursComponent {
  tours$ = this.api.getTours();

  constructor(private readonly api: TourService) { }
}
