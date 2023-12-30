import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardAddComponent } from './card-add/card-add.component';
import { ScopeListComponent } from './modules/home/components/scope-list/scope-list.component';

const routes: Routes =   [  
  { path: 'add', component: CardAddComponent },
  { path: 'scopes', component: ScopeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
