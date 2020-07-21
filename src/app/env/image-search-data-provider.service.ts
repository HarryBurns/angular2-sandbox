import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchDataProviderService } from './search-data-provider.service';

@Injectable()
export class ImageSearchDataProviderService extends SearchDataProviderService {

  public readonly searchImage = new BehaviorSubject<ImageSnippet>(undefined);

  constructor() {
    super();

    this.searchEngines.concat([
      {
        id: 'baidu',
        name: 'Baidu',
        route: 'baidu',
        getSearchUrl: (query) => `http://www.baidu.com/s?wd=${query}`
      },
      {
        id: 'yahoo',
        name: 'Yahoo',
        route: 'yahoo',
        getSearchUrl: (query) => `https://search.yahoo.com/search?p=${query}`
      },
      {
        id: 'yandex',
        name: 'Yandex',
        route: 'yandex',
        getSearchUrl: (query) => `https://yandex.com/search/?text=${query}`
      }
    ]);
  }
}

export class ImageSnippet {
  constructor(public src: string, public file: File) {
  }
}
