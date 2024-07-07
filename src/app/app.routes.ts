import { Routes } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { CategoryComponent } from './category/category.component';
import { DetailComponent } from './detail/detail.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { AuthGuard } from './service/auth.guard';
import { SellComponent } from './sell/sell.component';

export const routes: Routes = [
    { path: '', component: ListingComponent },
    { path: 'cat', component: CategoryComponent },
    { path: 'itm/:id', component: DetailComponent },
    { path: 'sell', component: SellComponent, canActivate: [AuthGuard]},
    { path: 'sign-in', component: SignInComponent },
    { path: 'sign-up', component: SignUpComponent },
];
