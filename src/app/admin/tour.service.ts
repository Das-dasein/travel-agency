import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';

import { ID, Tour } from '../model';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  constructor(private readonly api: NgxIndexedDBService) { }

  getTours(): Observable<Tour[]> {
    return this.api.getAll('tour');
  }

  removeTour(id: ID) {
    return this.api.delete('tour', id);
  }
}
