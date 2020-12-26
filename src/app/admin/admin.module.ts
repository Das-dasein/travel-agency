import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [AdminPanelComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: AdminPanelComponent
    }])
  ]
})
export class AdminModule {
}
