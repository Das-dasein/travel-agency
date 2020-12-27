import { Component } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import * as migration from '../assets/migration.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'travel-agency';

  constructor(private dbService: NgxIndexedDBService) {
    this.dbService
      .add('tour', migration[0])
      .subscribe((key) => {
        console.log('key: ', key);
      });
  }
}
