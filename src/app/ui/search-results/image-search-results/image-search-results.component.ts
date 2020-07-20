import { Component, OnInit } from '@angular/core';
import { ImageSearchDataProviderService, ImageSnippet } from '../../../env/image-search-data-provider.service';
import { SearchEngine } from '../../../env/search-data-provider.service';

@Component({
  selector: 'app-image-search-results',
  templateUrl: './image-search-results.component.html',
  styleUrls: ['./image-search-results.component.scss']
})
export class ImageSearchResultsComponent implements OnInit {

  public searchImage: ImageSnippet;

  public selectedSearchEngineName: string;

  constructor(private readonly searchDataProvider: ImageSearchDataProviderService) {
  }

  ngOnInit() {
    this.selectedSearchEngineName = this.getSearchEngineName(this.searchDataProvider.selectedSearchEngine.getValue());
    this.searchDataProvider.selectedSearchEngine
      .subscribe(value => {
        this.selectedSearchEngineName = this.getSearchEngineName(value);
      });

    this.searchImage = this.searchDataProvider.searchImage.getValue();
    this.searchDataProvider.searchImage
      .subscribe(value => {
        this.searchImage = value;
      });
  }

  private getSearchEngineName(searchEngineId: SearchEngine) {
    return this.searchDataProvider.searchEngines.find(e => e.id === searchEngineId).name;
  }

}
