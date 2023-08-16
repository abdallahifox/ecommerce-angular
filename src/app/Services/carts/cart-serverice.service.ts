import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { cartItems, productType } from 'src/app/shared/types';

@Injectable({
  providedIn: 'root',
})
export class CartServericeService {
  cart: cartItems[] = [];
  totalAmount:number=0
  constructor(private toaster:ToastrService) {}

  addItemToCart(product: productType) {
    const findProduct = this.cart.findIndex((prod) => prod.id === product.id);
    if (findProduct === -1) {
      const producCartItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        qty: 1,
      };

      this.cart.push(producCartItem);
    } else {
      this.cart[findProduct].qty++;
    }

    this.toaster.success('Your Item Has been Added','Added')
    this.getTotalPrice()
  }


  increaseCartItem(id:number){
    const findItem = this.cart.find(product => product.id === id)!
    findItem.qty++
    this.getTotalPrice()
  }


  decreaseCartItem(id:number){
    const findItem = this.cart.findIndex(product => product.id === id)!
    this.cart[findItem].qty--
    if(this.cart[findItem].qty < 1){
      this.cart = this.cart.filter(prod => prod.id !== id)
    }
    this.getTotalPrice()
  }



  deleteCartItem(id:number){
    this.cart = this.cart.filter(prod => prod.id !== id)
    this.getTotalPrice()
  }

  getTotalPrice(){
    const totalPrice = this.cart.reduce((acc,prevItem)=>{
     acc += +prevItem.price * prevItem.qty
     return acc
    },0)

    this.totalAmount = totalPrice
  }
}
