import { Component, EventEmitter, Output } from '@angular/core';
import { Topic } from '../../../../core/models/topic';
import { guid } from '../../../../core/types/guid';

@Component({
  selector: 'app-topic-add',
  templateUrl: './topic-add.component.html',
  styleUrl: './topic-add.component.scss'
})
export class TopicAddComponent {
  @Output() onSubmitClick = new EventEmitter<Topic>();

  topic: Topic = {
    id: guid(''),
    name: '',
    scopeId: guid('')
  };

  onSubmit() {
    this.onSubmitClick.emit(this.topic);
  }

}
