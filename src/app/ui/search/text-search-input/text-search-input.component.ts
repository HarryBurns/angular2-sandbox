import { Component, OnInit } from '@angular/core';
import { SearchDataProviderService, SearchEngine } from '../../../env/search-data-provider.service';

@Component({
  selector: 'app-text-search-input',
  templateUrl: './text-search-input.component.html',
  styleUrls: ['./text-search-input.component.scss']
})
export class TextSearchInputComponent implements OnInit {

  public readonly engines = this.searchDataProvider.searchEngines;

  public searchQuery: string;

  public selectedSearchEngine: SearchEngine;

  constructor(private readonly searchDataProvider: SearchDataProviderService) {

  }

  ngOnInit() {
    this.selectedSearchEngine = this.searchDataProvider.selectedSearchEngine.getValue();
    this.searchDataProvider.selectedSearchEngine
      .subscribe(value => {
        this.selectedSearchEngine = value;
      });

    this.searchQuery = this.searchDataProvider.searchQuery.getValue();
    this.searchDataProvider.searchQuery
      .subscribe(value => {
        this.searchQuery = value;
      });
  }

  onSearchEngineChange(value) {
    if (this.searchDataProvider.selectedSearchEngine.getValue() !== value) {
      this.searchDataProvider.selectedSearchEngine.next(value);
    }
  }

  onSearchQueryChange(value) {
    if (this.searchDataProvider.searchQuery.getValue() !== value) {
      this.searchDataProvider.searchQuery.next(value);
    }
  }

}
