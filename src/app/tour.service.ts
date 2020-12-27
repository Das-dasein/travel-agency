import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ID, Message, Operator, Order, Tour } from './model';

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

  getContactMessages(): Observable<Message[]> {
    return this.api.getAll('contact');
  }

  addContact(contact: Message): Observable<Message[]> {
    return this.api.add('contact', contact).pipe(switchMap(() => this.getContactMessages()))
  }

  addOrder(order: Order) {
    return this.api.add('order', order);
  }

  getOrders() {
    return this.api.getAll('order');
  }

  getTour(id: number): Observable<Tour> {
    return this.api.getByKey('tour', id);
  } 

  updateOrder(order: Order): Observable<Order[]> {
    return this.api.update('order', order);
  }

  deleteOrder(id: ID): Observable<Order[]> {
    return this.api.delete('order', id);
  }
}
