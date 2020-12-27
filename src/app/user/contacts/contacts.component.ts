import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  form: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
      email: '',
      theme: '',
      message: '',
    });
  }

  handleSendMessage() {
    console.log(this.form.getRawValue());
  }
}
