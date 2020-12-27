import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ID, Operator, Tour } from './model';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  constructor(private readonly api: NgxIndexedDBService) { }

  getTours(): Observable<Tour[]> {
    return this.api.getAll('tour');
  }

  removeTour(id: ID): Observable<Tour[]> {
    return this.api.delete('tour', id);
  }

  addTour(tour: Tour): Observable<Tour[]> {
    return this.api.add('tour', tour).pipe(switchMap(() => this.getTours()))
  }

  updateTour(tour: Tour): Observable<Tour[]> {
    return this.api.update('tour', tour);
  }

  getOperators(): Observable<Operator[]> {
    return this.api.getAll('operator');
  }

  addOperator(operator: Operator): Observable<Operator[]> {
    return this.api.add('operator', operator).pipe(switchMap(() => this.getOperators()))
  }
}
