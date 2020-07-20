import { Component, OnInit } from '@angular/core';
import { SearchDataProviderService } from '../../../env/search-data-provider.service';

@Component({
  selector: 'app-bing-search-results',
  templateUrl: './bing-search-results.component.html',
  styleUrls: ['./bing-search-results.component.scss']
})
export class BingSearchResultsComponent implements OnInit {

  searchQuery: string;

  constructor(private readonly searchDataProvider: SearchDataProviderService) {

  }

  ngOnInit() {
    this.searchQuery = this.searchDataProvider.searchQuery.getValue();
    this.searchDataProvider.searchQuery
      .subscribe(value => {
        this.searchQuery = value;
      });
  }

}
