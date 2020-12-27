import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-phone-cell',
  template: `
    <a class="mr-3" [attr.href]="'tel:'+ value + ''">
                  <nb-icon icon="phone-outline"></nb-icon>
    </a> {{value}} 
  `,
})
export class PhoneCellComponent implements ViewCell, OnInit {
  @Input() value: any;
  @Input() rowData: any;

  ngOnInit(): void {
  }
}
