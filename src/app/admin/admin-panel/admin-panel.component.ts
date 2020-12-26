import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent {
  items = [{
    link: 'tours',
    title: 'Туры'
  }, {
    link: 'insights',
    title: 'Чарты'
  }];


  constructor(public route: ActivatedRoute) {
  }
}
