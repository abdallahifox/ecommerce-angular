import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { WhishlistComponent } from './pages/whishlist/whishlist.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    title:'Home'
  },
  {
    path:'about',
    component:AboutComponent,
    title:'About | Ecommerce-Clone'
  },
  {
    path:'product/:id',
    component:ProductDetailsComponent,
  },
  {
    path:'cart',
    component:CartComponent,
    title:'Cart Details | Ecommerce Clone'
  },
  {
    path:'whishlist',
    component:WhishlistComponent,
    title:'Whish List | Ecommerce Clone'
  },
  {
    path:'not-found',
    component:NotFoundComponent,
    title:'Error 404 | Not Found'
  },
  {
    path:'**',
    redirectTo:'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
