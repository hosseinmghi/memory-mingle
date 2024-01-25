import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardAddComponent } from './card-add/card-add.component';
import { MaterialModule } from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScopeListComponent } from './modules/home/components/scope-list/scope-list.component';
import { ScopeItemComponent } from './modules/home/components/scope-item/scope-item.component';
import { TopicListComponent } from './modules/home/components/topic-list/topic-list.component';
import { TopicItemComponent } from './modules/home/components/topic-item/topic-item.component';
import { WordAddComponent } from './modules/home/components/word-add/word-add.component';
import { TopicAddComponent } from './modules/home/components/topic-add/topic-add.component';
import { WordListComponent } from './modules/home/components/word-list/word-list.component';
import { WordListItemComponent } from './modules/home/components/word-list-item/word-list-item.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    CardAddComponent,
    ScopeListComponent,
    ScopeItemComponent,
    TopicListComponent,
    TopicItemComponent,
    WordAddComponent,
    TopicAddComponent,
    WordListComponent,
    WordListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
