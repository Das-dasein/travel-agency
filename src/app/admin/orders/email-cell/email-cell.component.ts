import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-email-cell',
  template: `
                    <a class="mr-3" [attr.href]="'mailto:'+value">
                        <nb-icon icon="email-outline"></nb-icon>
                    </a> {{value}}

  `,
})
export class EmailCellComponent implements ViewCell {
  @Input() value: any;
  @Input() rowData: any;
}
