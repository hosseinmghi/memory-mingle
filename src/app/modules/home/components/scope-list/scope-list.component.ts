import { Component } from '@angular/core';
import { Scope } from '../../../../core/models/scope';
import { ScopeService } from '../../../../core/services/scope.service';

@Component({
  selector: 'app-scope-list',
  templateUrl: './scope-list.component.html',
  styleUrl: './scope-list.component.scss'
})
export class ScopeListComponent {
  scopes: Scope[] | undefined;

  constructor(private scopeServie: ScopeService) {

  }

  ngOnInit() {
    this.scopeServie.getScopes().subscribe(scopes => {
      this.scopes = scopes;
    })
  }

  onScopeClick() {
    throw new Error('Method not implemented.');
  }
}
