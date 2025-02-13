import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DogListComponent } from './components/dog-list/dog-list.component';

export const routes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'cachorros-disponibles', component: DogListComponent },
    { path: '**', redirectTo: '' },
];
