import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NbMenuItem} from '@nebular/theme';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent {
  items: NbMenuItem[] = [{
    link: 'tours',
    title: 'Туры'
  }, {
    link: 'insights',
    title: 'Чарты'
  }];


  constructor(public route: ActivatedRoute) {
  }

}
