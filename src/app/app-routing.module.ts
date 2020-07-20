import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './ui/search/search.component';
import { ImageSearchComponent } from './ui/image-search/image-search.component';
import { BingSearchResultsComponent } from './ui/search-results/bing-search-results/bing-search-results.component';
import { GoogleSearchResultsComponent } from './ui/search-results/google-search-results/google-search-results.component';

const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent,
    children: [
      {
        path: 'google',
        component: GoogleSearchResultsComponent
      },
      {
        path: 'bing',
        component: BingSearchResultsComponent
      }
    ]
  },

  {
    path: 'img-search',
    component: ImageSearchComponent
  },

  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
