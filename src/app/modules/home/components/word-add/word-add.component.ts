import { Component, Output } from '@angular/core';
import { WordService } from '../../../../core/services/word.service';
import { Word } from '../../../../core/models/word';
import { guid } from '../../../../core/types/guid';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-word-add',
  templateUrl: './word-add.component.html',
  styleUrl: './word-add.component.scss'
})
export class WordAddComponent {
  word: Word = {
    id: guid(''),
    topicId: guid(''),
    word: '',
    definition: ''
  };

  constructor(private wordService: WordService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.get("topicid"))
        this.word.topicId = guid(params.get("topicid")!);
    })
  }

  onSubmit() {
    this.wordService.addWord(this.word).subscribe(r => {
      this.word.word = '';
      this.word.definition = '';
    })
  }
}
