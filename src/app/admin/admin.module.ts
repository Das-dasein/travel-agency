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
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AdminPanelComponent, ToursComponent, InsightsComponent, SafeHtmlPipe, EditTourComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NbLayoutModule,
    NbMenuModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    NbDatepickerModule,
    NbToastrModule.forRoot({
      position: NbGlobalLogicalPosition.BOTTOM_END
    }),
    NbDialogModule.forChild(),
    NgbCarouselModule,
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
