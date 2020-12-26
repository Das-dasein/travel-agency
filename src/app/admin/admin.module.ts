import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {RouterModule} from '@angular/router';
import { NbIconModule } from '@nebular/theme';
import {NbCardModule, NbLayoutModule, NbMenuModule, NbSidebarModule} from '@nebular/theme';

import {ToursComponent} from './tours/tours.component';
import {InsightsComponent} from './insights/insights.component';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  declarations: [AdminPanelComponent, ToursComponent, InsightsComponent, SafeHtmlPipe],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbMenuModule,
    NbCardModule,
    NbIconModule,
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
    }]),
    NbSidebarModule
  ]
})
export class AdminModule {
}
