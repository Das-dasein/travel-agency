import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { RouterModule } from '@angular/router';
import { NbDatepickerModule, NbDialogModule, NbGlobalLogicalPosition, NbIconModule, NbInputModule, NbToastrModule } from '@nebular/theme';
import { NbCardModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbButtonModule } from '@nebular/theme';

import { ToursComponent } from './tours/tours.component';
import { InsightsComponent } from './insights/insights.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { EditTourComponent } from './tours/edit-tour/edit-tour.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/shared/shared.module';
import { VisitorsAnalyticsComponent } from './visitors-analytics/visitors-analytics.component';
import { VisitorsAnalyticsChartComponent } from './visitors-analytics/visitors-analytics-chart/visitors-analytics-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { OperatorsComponent } from './operators/operators.component';

@NgModule({
  declarations: [AdminPanelComponent, ToursComponent, InsightsComponent, SafeHtmlPipe, EditTourComponent, VisitorsAnalyticsComponent, VisitorsAnalyticsChartComponent, OperatorsComponent],
  imports: [
    NbToastrModule.forRoot({
      position: NbGlobalLogicalPosition.BOTTOM_END
    }),
    NbDialogModule.forChild(),
    SharedModule, 
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
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
  ]
})
export class AdminModule {
}
