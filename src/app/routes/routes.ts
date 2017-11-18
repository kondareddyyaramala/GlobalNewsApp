import { RouterModule, Routes } from '@angular/router';
import { AppContainer } from '../containers/app/app.container';
import { HomePageContainer } from '../containers/home-page/home-page.container';




const appRoutes = [
    { path: 'home' , component: HomePageContainer },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

export const ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
