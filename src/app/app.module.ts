import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIconsModule } from '@ng-icons/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';



import { heroHeart, heroArchiveBoxXMark,heroPlusSmall,heroMinusSmall,heroUser} from '@ng-icons/heroicons/outline';
import { heroHeartMini,heroShoppingBagMini } from '@ng-icons/heroicons/mini';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { LoadingInterceptor } from './interceptors/loading-interceptor';
import { FilterProductsComponent } from './components/filter-products/filter-products.component';
import { CartComponent } from './pages/cart/cart.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { WhishlistComponent } from './pages/whishlist/whishlist.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavigationComponent,
    ProductDetailsComponent,
    FilterProductsComponent,
    CartComponent,
    NotFoundComponent,
    WhishlistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgIconsModule.withIcons({heroHeart,heroHeartMini,heroShoppingBagMini,heroArchiveBoxXMark,heroPlusSmall,heroMinusSmall,heroUser}),
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
