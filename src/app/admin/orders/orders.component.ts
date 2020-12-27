import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Order } from 'src/app/model';
import { TourService } from 'src/app/tour.service';
import { EmailCellComponent } from './email-cell/email-cell.component';
import { PhoneCellComponent } from './phone-cell/phone-cell.component';
import { StatusCellComponent } from './status-cell/status-cell.component';

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
          type: 'custom',
          renderComponent: StatusCellComponent
        },
        description: {
          title: 'Описание',
          type: 'string'
        }
      }
    }

  orders$ = this.api.getOrders();

  constructor(private readonly api: TourService, private readonly dialog: NbDialogService) { }

  handleRowSelect({ data }: { data: Order }, template: TemplateRef<any>) {
    const count = 1;
    this.api.getTour(data.tour).subscribe(tour => {
      this.dialog.open(template, {
        context: {
          order: data,
          tour,
          count
        }
      }).onClose.subscribe((status) => {
        if (status) {
          this.orders$ = this.api.updateOrder({
            ...data,
            status
          });
        }
      });
    });
  }
}
