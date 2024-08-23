import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IncrementComponent } from './pages/increment/increment.component';
import { GroceryComponent } from './pages/grocery/grocery.component';

export const routes: Routes = [
    { path: '' , component: HomeComponent } , 
    { path: 'increment' , component: IncrementComponent } , 
    { path: 'grocery' , component: GroceryComponent } , 

];
