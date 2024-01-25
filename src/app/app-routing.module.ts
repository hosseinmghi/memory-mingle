import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardAddComponent } from './card-add/card-add.component';
import { ScopeListComponent } from './modules/home/components/scope-list/scope-list.component';
import { TopicListComponent } from './modules/home/components/topic-list/topic-list.component';
import { WordAddComponent } from './modules/home/components/word-add/word-add.component';
import { WordListComponent } from './modules/home/components/word-list/word-list.component';

const routes: Routes =   [  
  { path: 'add', component: CardAddComponent },
  { path: 'scopes', component: ScopeListComponent },
  { path: 'topics/:scopeid', component: TopicListComponent } ,
  { path: 'words/add/:topicid', component: WordAddComponent } ,
  { path: 'words/list/:topicid', component: WordListComponent } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
