import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  form: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      placement: '',
      range: {
        start: new Date(),
        end: new Date()
      },
      price: 0,
    });
  }

  handleSearchTours() {
    console.log(this.form);
  }

}
