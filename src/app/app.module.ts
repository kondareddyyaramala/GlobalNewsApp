import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpModule } from '@angular/http';
import { AppContainer } from './containers/app/app.container';
import { ROUTES } from '../app/routes/routes';
import { HomePageContainer } from './containers/home-page/home-page.container';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import {
  MatCardModule,
  MatFormFieldModule,
  MatOptionModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { NewsService } from './services/news.service';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppContainer,
    HomePageContainer,
    HeaderBarComponent,
    ArticleComponent,
    SearchComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatCardModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    ROUTES
  ],
  providers: [NewsService],
  entryComponents: [],
  bootstrap: [AppContainer]
})
export class AppModule { }
