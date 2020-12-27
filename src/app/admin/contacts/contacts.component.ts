import { Component, OnInit } from '@angular/core';
import {EmailCellComponent} from "../orders/email-cell/email-cell.component";
import {PhoneCellComponent} from "../orders/phone-cell/phone-cell.component";
import {TourService} from "../../tour.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private readonly api: TourService) { }

  ngOnInit(): void {
  }

  settings = {
      actions: {
        add: false,
        edit: false,
        delete: false
      },
      columns: {
        name: {
          title: 'Имя',
          type: 'string'
        },
        email: {
          title: 'Email',
          type: 'custom',
          renderComponent: EmailCellComponent
        },
        theme: {
          title: 'Тема',
          type: 'string'
        },
        message: {
          title: 'Текст письма',
          type: 'string'
        },
      }
    };

  orders$ = this.api.getContactMessages();
}
