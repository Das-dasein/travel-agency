import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NbActionsModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbMenuModule, NbSidebarModule, NbToastrModule, NbUserModule } from '@nebular/theme';
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
  NbSidebarModule,
  NbListModule,
  NbUserModule,
  NbActionsModule,
  NbFormFieldModule
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
