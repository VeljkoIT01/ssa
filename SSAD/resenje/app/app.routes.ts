import { Routes } from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { DetaljiComponent } from './components/detalji/detalji.component';

export const routes: Routes = [
    {path:'news', component: NewsComponent},
    {path: 'detalji/:id', component: DetaljiComponent},
    {path: '**', component: NewsComponent}];
