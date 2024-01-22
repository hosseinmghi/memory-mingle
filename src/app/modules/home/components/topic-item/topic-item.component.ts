import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Topic } from '../../../../core/models/topic';

@Component({
  selector: 'app-topic-item',
  templateUrl: './topic-item.component.html',
  styleUrl: './topic-item.component.scss'
})
export class TopicItemComponent {
  @Input() topic: Topic | undefined;
  @Output() addClick = new EventEmitter();

  constructor() {
  }

  onAddClick() {
    this.addClick.emit();
  };

  onClick(){
    
  }
}
