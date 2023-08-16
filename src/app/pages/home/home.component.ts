import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { ProductsServericeService } from 'src/app/Services/products/products-serverice.service';
import { productType } from 'src/app/shared/types';
import { CartServericeService } from 'src/app/Services/carts/cart-serverice.service';
import { WishlistServiceService } from 'src/app/Services/whishlist/wishlist-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselModule, NgIf, NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  images = ['https://f.nooncdn.com/mpcms/EN0003/assets/7e4d2f53-e9e5-4eed-b3e6-4b23de7e15d3.png', 'https://f.nooncdn.com/mpcms/EN0003/assets/d1d5de18-2637-483d-b279-27a283b3c12e.png', 'https://f.nooncdn.com/mpcms/EN0003/assets/092cac56-84cb-4054-b212-495b71d5b81e.png'];


  whishlist:any

  constructor(private config: NgbCarouselConfig, public productService: ProductsServericeService,private cartService:CartServericeService,private whishlistService:WishlistServiceService) {
    config.showNavigationIndicators = false,
    config.interval = 3000
  }

  ngOnInit(): void {
    this.productService.getAllProducts()
    this.whishlist = this.whishlistService.whishlist
  }


  addToCartHandler(product:productType){
    this.cartService.addItemToCart(product)
  }

  addToWhishlist(product:productType){
    this.whishlistService.addProductToWhishlist(product)
    this.whishlist = this.whishlistService.whishlist
  }
}
