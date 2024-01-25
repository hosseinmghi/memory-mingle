import { Component, Input } from '@angular/core';
import { Topic } from '../../../../core/models/topic';
import { TopicService } from '../../../../core/services/topic.service';
import { GUID, guid } from '../../../../core/types/guid';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrl: './topic-list.component.scss'
})
export class TopicListComponent {
  topics: Topic[] | undefined;
  scopeId: GUID | undefined;

  constructor(private topicService: TopicService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        if (params.get('scopeid'))
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

  onAddClick(topic: Topic) {
    this.router.navigate(["/words/add", topic.id]);
  }

  onListClick(topic: Topic) {
    this.router.navigate(["/words/list", topic.id]);
  }

  addNewTopic(topic: Topic) {
    topic.scopeId = this.scopeId!;
    if (topic)
      this.topicService.addTopic(topic).subscribe(() => {
        this.loadtopics();
      });
  }
}
