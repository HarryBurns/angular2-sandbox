import { Component, OnInit } from '@angular/core';
import { SearchDataProviderService } from '../../../env/search-data-provider.service';

@Component({
  selector: 'app-google-search-results',
  templateUrl: './google-search-results.component.html',
  styleUrls: ['./google-search-results.component.scss']
})
export class GoogleSearchResultsComponent implements OnInit {

  searchQuery: string;

  constructor(private readonly searchDataProvider: SearchDataProviderService) {

  }

  ngOnInit() {
    this.searchDataProvider.searchQuery
      .subscribe(value => {
        this.searchQuery = value;
      });
  }

}
