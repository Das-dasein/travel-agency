import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {DBConfig, NgxIndexedDBModule} from 'ngx-indexed-db';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NbCardModule, NbMenuModule, NbSidebarModule, NbThemeModule} from '@nebular/theme';

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
      storeConfig: {keyPath: 'id', autoIncrement: true},
      storeSchema: [
        {name: 'name', keypath: 'name', options: {unique: true}},
        {name: 'image', keypath: 'image', options: {unique: false}},
        {name: 'description', keypath: 'description', options: {unique: false}}
      ]
    }]
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
