import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchDataProviderService, SearchEngine } from '../../env/search-data-provider.service';

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [
    SearchDataProviderService
  ]
})
export class SearchComponent implements OnInit {

  constructor(private readonly router: Router,
              private readonly route: ActivatedRoute,
              private readonly searchDataProvider: SearchDataProviderService) {

  }

  ngOnInit() {
    this.searchDataProvider.selectedSearchEngine
      .subscribe((value: SearchEngine) => {
        this.router.navigate([value], {relativeTo: this.route});
      });
  }

}
