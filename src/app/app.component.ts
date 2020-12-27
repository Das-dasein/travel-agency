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
    // this.dbService
    //   .add('operator', {
    //     name: 'Alex George',
    //     company: 'Nebular',
    //     phone: '8-800-555-35-35',
    //     email: 'alex@george.com'
    //   })
    //   .subscribe((key) => {
    //     console.log('key: ', key);
    //   });
  }
}
