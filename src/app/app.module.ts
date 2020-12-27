import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbButtonModule, NbDatepickerModule, NbDialogModule, NbMenuModule, NbSidebarModule, NbThemeModule } from '@nebular/theme';
import { SharedModule } from 'src/shared/shared.module';

export function migrationFactory() {
  // // The animal table was added with version 2 but none of the existing tables or data needed
  // // to be modified so a migrator for that version is not included.
  // return {
  //   1: (db, transaction) => {
  //     const store = transaction.objectStore('people');
  //     store.createIndex('country', 'country', {unique: false});
  //   },
  //   3: (db, transaction) => {
  //     const store = transaction.objectStore('people');
  //     store.createIndex('age', 'age', {unique: false});
  //   }
  // };
}

const dbConfig: DBConfig = {
  name: 'MyDb',
  version: 2,
  objectStoresMeta: [
    {
      store: 'tour',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: true } },
        { name: 'image', keypath: 'image', options: { unique: false } },
        { name: 'description', keypath: 'description', options: { unique: false } },
        { name: 'country', keypath: 'country', options: { unique: false } },
        { name: 'hotel', keypath: 'hotel', options: { unique: false } },
        { name: 'price', keypath: 'price', options: { unique: false } },
        { name: 'startDate', keypath: 'startDate', options: { unique: false } },
        { name: 'endDate', keypath: 'endDate', options: { unique: false } },
      ]
    }]
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbDialogModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbEvaIconsModule,
    NbButtonModule,
    SharedModule.forRoot(),
    NgxIndexedDBModule.forRoot(dbConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
