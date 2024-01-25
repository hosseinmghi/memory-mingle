import { Component, Input } from '@angular/core';
import { Word } from '../../../../core/models/word';

@Component({
  selector: 'app-word-list-item',
  templateUrl: './word-list-item.component.html',
  styleUrl: './word-list-item.component.scss'
})
export class WordListItemComponent {
  @Input() word: Word | undefined;

}
