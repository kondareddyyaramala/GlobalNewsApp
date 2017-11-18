import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppContainer } from './containers/app/app.container';
import { ROUTES } from '../app/routes/routes';
import { HomePageContainer } from './containers/home-page/home-page.container';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';

@NgModule({
  declarations: [
    AppContainer,
    HomePageContainer,
    HeaderBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTES],
  providers: [],
  entryComponents: [],
  bootstrap: [AppContainer]
})
export class AppModule { }
