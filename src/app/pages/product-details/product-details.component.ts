import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CartServericeService } from 'src/app/Services/carts/cart-serverice.service';
import { ProductsServericeService } from 'src/app/Services/products/products-serverice.service';
import { WishlistServiceService } from 'src/app/Services/whishlist/wishlist-service.service';
import { productType } from 'src/app/shared/types';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: string = ''
  product: productType | null = null
  relatedProducts:productType[] = []
  whishlist:any= {}

  constructor(private whishlistService:WishlistServiceService,private productsServrice: ProductsServericeService, private route: ActivatedRoute, private router: Router,private cartService:CartServericeService) { }
  ngOnInit() {
    this.getProductUsingId()
    this.getRelatedProducts()
    this.whishlist = this.whishlistService.whishlist
  }

  getRelatedProducts(){
    const randomStartNumber = Math.floor(Math.random() * 10)
    const randomEndNumber = Math.floor(Math.random() * 10)
    if(this.productsServrice.products.length > 0){
      this.relatedProducts = this.productsServrice.products.slice(randomStartNumber,randomEndNumber)
    }
  }

  getProductUsingId() {
    this.route.params.subscribe((param: Params) => {
      this.productsServrice.getProductById(param['id']).subscribe(product => {
        if (product) {
          this.product = product
          document.title = product.title
        } else {
          this.router.navigate(['/'])
        }
      })
    })
  }



  addToCartHandler(product:productType){

    this.cartService.addItemToCart(product)
  }


  addToWhishlist(product:productType){
    this.whishlistService.addProductToWhishlist(product)
    this.whishlist = this.whishlistService.whishlist
  }
}
