import { Component } from '@angular/core';
import { Scope } from '../../../../core/models/scope';
import { ScopeService } from '../../../../core/services/scope.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scope-list',
  templateUrl: './scope-list.component.html',
  styleUrl: './scope-list.component.scss'
})
export class ScopeListComponent {
  scopes: Scope[] | undefined;

  constructor(private scopeServie: ScopeService, private router: Router) {

  }

  ngOnInit() {
    this.scopeServie.getScopes().subscribe(scopes => {
      this.scopes = scopes;
    })
  }

  onScopeClick(scope: Scope) {
    if (scope)
      this.router.navigate(['/topics'], { queryParams: { scopeid: scope.id } })
  }
}
