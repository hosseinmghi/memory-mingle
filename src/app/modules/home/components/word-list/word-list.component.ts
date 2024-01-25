import { Component, ViewChild } from '@angular/core';
import { Word } from '../../../../core/models/word';
import { WordService } from '../../../../core/services/word.service';
import { GUID, guid } from '../../../../core/types/guid';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrl: './word-list.component.scss'
})
export class WordListComponent {
  wordList: Word[] = [];
  topicId: GUID | undefined;
  displayedColumns: string[] = ['word', 'definition'];
  dataSource: MatTableDataSource<Word> = new MatTableDataSource<Word>();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private wordService: WordService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.get("topicid")) {
        this.topicId = guid(params.get("topicid")!);
        this.wordService.getWords(this.topicId)
          .subscribe(words => this.dataSource.data = words);
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource!.paginator = this.paginator;
  }
}
