import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './ui/search/search.component';
import { ImageSearchComponent } from './ui/image-search/image-search.component';
import { TextSearchInputComponent } from './ui/search/text-search-input/text-search-input.component';
import { MatButtonModule, MatIconModule, MatInputModule, MatRadioModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { GoogleSearchResultsComponent } from './ui/search-results/google-search-results/google-search-results.component';
import { BingSearchResultsComponent } from './ui/search-results/bing-search-results/bing-search-results.component';
import { ImageSearchInputComponent } from './ui/image-search/image-search-input/image-search-input.component';
import { ImageSearchResultsComponent } from './ui/search-results/image-search-results/image-search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ImageSearchComponent,
    TextSearchInputComponent,
    GoogleSearchResultsComponent,
    BingSearchResultsComponent,
    ImageSearchInputComponent,
    ImageSearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    FormsModule,
    MatRadioModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
