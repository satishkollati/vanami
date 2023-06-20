import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CustomMaterialModule } from './material/material.module';
import { EntityListComponent } from './entity-list-home/entity-list-home.component';
import { NavigatorHomeComponent } from './navigator-home/navigator.component';

const appRoutes: Routes = [
  { path: 'list-entity-data', component: EntityListComponent },
  { path: '', component: NavigatorHomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EntityListComponent,
    NavigatorHomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    BrowserModule, 
    NoopAnimationsModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
