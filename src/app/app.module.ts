import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppContainer } from './containers/app/app.container';
import { ROUTES } from '../app/routes/routes';
import { HomePageContainer } from './containers/home-page/home-page.container';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { MatCardModule } from '@angular/material';
import { NewsService } from './services/news.service';
import { ArticleComponent } from './components/article/article.component';

@NgModule({
  declarations: [
    AppContainer,
    HomePageContainer,
    HeaderBarComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatCardModule,
    ROUTES],
  providers: [NewsService],
  entryComponents: [],
  bootstrap: [AppContainer]
})
export class AppModule { }
