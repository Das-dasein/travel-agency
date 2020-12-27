import { NgModule } from '@angular/core';

import { SharedModule } from 'src/shared/shared.module';
import { MainPageComponent } from "./main-page/main-page.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { RouterModule } from "@angular/router";
import { ToursComponent } from './tours/tours.component';

@NgModule({
  declarations: [MainPageComponent, SearchBarComponent, ToursComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: MainPageComponent,
    }, {
      path: 'tours',
      component: ToursComponent,
    }]),
  ]
})
export class UserModule {
}
