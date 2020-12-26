import {Component} from '@angular/core';
import {NgxIndexedDBService} from 'ngx-indexed-db';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'travel-agency';

  constructor(private dbService: NgxIndexedDBService) {
  }
}
