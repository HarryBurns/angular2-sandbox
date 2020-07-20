import { Component, OnInit } from '@angular/core';
import { SearchEngine } from '../../../env/search-data-provider.service';
import { ImageSearchDataProviderService, ImageSnippet } from '../../../env/image-search-data-provider.service';

@Component({
  selector: 'app-image-search-input',
  templateUrl: './image-search-input.component.html',
  styleUrls: ['./image-search-input.component.scss']
})
export class ImageSearchInputComponent implements OnInit {

  public readonly engines = this.searchDataProvider.searchEngines;

  public searchImage: ImageSnippet;

  public selectedSearchEngine: SearchEngine;

  constructor(private readonly searchDataProvider: ImageSearchDataProviderService) {

  }

  ngOnInit() {
    this.selectedSearchEngine = this.searchDataProvider.selectedSearchEngine.getValue();
    this.searchDataProvider.selectedSearchEngine
      .subscribe(value => {
        this.selectedSearchEngine = value;
      });

    this.searchImage = this.searchDataProvider.searchImage.getValue();
    this.searchDataProvider.searchImage
      .subscribe(value => {
        this.searchImage = value;
      });
  }

  onSearchEngineChange(value) {
    if (this.searchDataProvider.selectedSearchEngine.getValue() !== value) {
      this.searchDataProvider.selectedSearchEngine.next(value);
    }
  }

  processFile(imageInput: HTMLInputElement) {
    const file: File = imageInput.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.searchImage = new ImageSnippet(event.target.result, file);
      this.searchDataProvider.searchImage.next(this.searchImage);
    });

    reader.readAsDataURL(file);
  }

}
