import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageSearchDataProviderService } from '../../env/image-search-data-provider.service';

@Component({
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.scss'],
  providers: [
    ImageSearchDataProviderService
  ]
})
export class ImageSearchComponent implements OnInit {

  constructor(private readonly router: Router,
              private readonly route: ActivatedRoute,
              private readonly searchDataProvider: ImageSearchDataProviderService) {

  }

  ngOnInit() {

  }

}
