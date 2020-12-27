import { NgModule } from '@angular/core';

import { SharedModule } from 'src/shared/shared.module';
import { MainPageComponent } from "./main-page/main-page.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [MainPageComponent, SearchBarComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: MainPageComponent,
    }]),
  ]
})
export class UserModule {
}
