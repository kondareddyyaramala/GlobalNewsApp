import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterStoreModule } from '@ngrx/router-store';
import { AppContainer } from './containers/app/app.container';
import { ROUTES } from '../app/routes/routes';
import { reducer } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { ToasterEffects } from './effects/toaster.effects';
import { ToasterModule, ToasterContainerComponent } from 'angular2-toaster';
import { provideStore, StoreModule } from '@ngrx/store';
import { ToasterMessageComponent } from './components/toaster-message/toaster-message.component';
import { MapToIterablePipe } from './pipes/map-to-iterable.pipe';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { HomePageContainer } from './containers/home-page/home-page.container';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';

@NgModule({
  declarations: [
    AppContainer,
    ToasterMessageComponent,
    MapToIterablePipe,
    HomePageContainer,
    HeaderBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToasterModule,
    ROUTES,
    BootstrapModalModule,
    ModalModule.forRoot(),
    RouterStoreModule.connectRouter(),
    StoreModule.provideStore(reducer),
    EffectsModule.run(ToasterEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  providers: [],
  entryComponents: [ToasterMessageComponent],
  bootstrap: [AppContainer]
})
export class AppModule { }
