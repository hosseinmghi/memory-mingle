import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardAddComponent } from './card-add/card-add.component';
import { MaterialModule } from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScopeListComponent } from './modules/home/components/scope-list/scope-list.component';
import { ScopeItemComponent } from './modules/home/components/scope-item/scope-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CardAddComponent,
    ScopeListComponent,
    ScopeItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule  
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
