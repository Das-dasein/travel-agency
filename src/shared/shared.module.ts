import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbDialogModule, NbGlobalLogicalPosition, NbIconModule, NbInputModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbToastrModule } from '@nebular/theme';
import { NgbCarouselModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

const modules = [
  CommonModule,
  HttpClientModule,
  ReactiveFormsModule,
  NbLayoutModule,
  NbMenuModule,
  NbCardModule,
  NbButtonModule,
  NbIconModule,
  NbInputModule,
  NbDatepickerModule,
  NbSidebarModule,
  NgbCarouselModule,
  NgbRatingModule,
  NbSidebarModule
]

@NgModule({
  declarations: [],
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }
}
