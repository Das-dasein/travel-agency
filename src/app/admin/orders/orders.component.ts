import { Component, OnInit } from '@angular/core';
import { TourService } from 'src/app/tour.service';
import { EmailCellComponent } from './email-cell/email-cell.component';
import { PhoneCellComponent } from './phone-cell/phone-cell.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  settings =
    {
      actions: {
        add: false,
        edit: false,
        delete: false
      },
      columns: {
        name: {
          title: 'Заказчик',
          type: 'string'
        },
        email: {
          title: 'Email',
          type: 'custom',
          renderComponent: EmailCellComponent
        },
        phone: {
          title: 'Телефон',
          type: 'custom',
          renderComponent: PhoneCellComponent
        },
        status: {
          title: 'Статус',
          type: 'string'
        },
        description: {
          title: 'Описание',
          type: 'string'
        }
      }
    }

  orders$ = this.api.getOrders();

  constructor(private readonly api: TourService) { }
}
