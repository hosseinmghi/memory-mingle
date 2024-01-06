import { Component, Input } from '@angular/core';
import { Topic } from '../../../../core/models/topic';
import { TopicService } from '../../../../core/services/topic.service';
import { GUID, guid } from '../../../../core/types/guid';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrl: './topic-list.component.scss'
})
export class TopicListComponent {
  topics: Topic[] | undefined;
  scopeId: GUID | undefined;

  constructor(private topicService: TopicService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        if (params.get('scopeid') && params.get('scopeid') != null)
          this.scopeId = guid(params.get('scopeid')!);
          this.loadtopics();
        }
    )
  }

  private loadtopics() {
    if (this.scopeId)
      this.topicService.getTopics(this.scopeId).subscribe(topics => {
        this.topics = topics;
      });
  }
}
