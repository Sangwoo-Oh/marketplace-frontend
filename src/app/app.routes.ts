import { Routes } from '@angular/router';
import { TopPageComponent } from './top-page/top-page.component';
import { CategoryComponent } from './category/category.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
    { path: '', component: TopPageComponent },
    { path: 'cat', component: CategoryComponent },
    { path: 'itm', component: DetailComponent },
];
