import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { DetaljiComponent } from './components/detalji/detalji.component';

export const routes: Routes = [
    {path:'products', component: ProductComponent},
    {path: 'detalji/:id', component: DetaljiComponent},
    {path: '**', component: ProductComponent}
];
