import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Scope } from '../../../../core/models/scope';

@Component({
  selector: 'app-scope-item',
  templateUrl: './scope-item.component.html',
  styleUrl: './scope-item.component.scss'
})
export class ScopeItemComponent implements OnInit {
  @Input() scope: Scope | undefined = undefined;
  @Output() scopeClick = new EventEmitter();

  ngOnInit(): void {

  }

  onClick() {
    this.scopeClick.emit();
  }
}
