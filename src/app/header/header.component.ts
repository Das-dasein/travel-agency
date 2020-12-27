import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  items: NbMenuItem[] = [{
    title: "Главная",
    link: '/'
  },
  {
    title: "Туры",
    link: '/tours'
  },
  {
    title: "Контакты",
    link: '/contacts'
  },
  {
    title: "О нас",
    link: '/about-us'
  }]
}
