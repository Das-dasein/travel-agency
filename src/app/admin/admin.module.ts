import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {RouterModule} from '@angular/router';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import {ToursComponent} from './tours/tours.component';
import {InsightsComponent} from './insights/insights.component';

@NgModule({
  declarations: [AdminPanelComponent, ToursComponent, InsightsComponent],
  imports: [
    CommonModule,
    NgbNavModule,
    RouterModule.forChild([{
      path: '',
      component: AdminPanelComponent,
      children: [
        {
          path: 'tours',
          component: ToursComponent
        },
        {
          path: 'insights',
          component: InsightsComponent
        }
      ]
    }])
  ]
})
export class AdminModule {
}
