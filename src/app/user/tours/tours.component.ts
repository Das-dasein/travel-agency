import { Component, OnInit } from '@angular/core';
import { TourService } from 'src/app/tour.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent {
  tours$ = this.api.getTours();

  constructor(private readonly api: TourService) { }
}
