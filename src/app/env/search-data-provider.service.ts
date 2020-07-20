import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SearchDataProviderService {

  public readonly searchEngines: SearchEngineSettings[] = [
    {
      id: 'google',
      name: 'Google',
      route: 'google',
      getSearchUrl: (query) => `https://www.google.com/search?q=${query}`
    },
    {
      id: 'bing',
      name: 'Bing',
      route: 'bing',
      getSearchUrl: (query) => `https://www.bing.com/search?q=${query}`
    },
    // {
    //   id: 'baidu',
    //   name: 'Baidu',
    //   route: 'baidu',
    //   getSearchUrl: (query) => `http://www.baidu.com/s?wd=${query}`
    // },
    // {
    //   id: 'yahoo',
    //   name: 'Yahoo',
    //   route: 'yahoo',
    //   getSearchUrl: (query) => `https://search.yahoo.com/search?p=${query}`
    // },
    // {
    //   id: 'yandex',
    //   name: 'Yandex',
    //   route: 'yandex',
    //   getSearchUrl: (query) => `https://yandex.com/search/?text=${query}`
    // }
  ];

  public readonly selectedSearchEngine = new BehaviorSubject<SearchEngine>(this.searchEngines[0].id);

  public readonly searchQuery = new BehaviorSubject<string>('');

  constructor() {

  }
}

export type SearchEngine = 'google' | 'bing' | 'baidu' | 'yahoo' | 'yandex';

export interface SearchEngineSettings {
  id: SearchEngine;
  name: string;
  route: string;
  getSearchUrl: (query: string) => string;
}

