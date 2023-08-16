import { Component, OnInit } from '@angular/core';
import { CartServericeService } from 'src/app/Services/carts/cart-serverice.service';
import { cartItems } from 'src/app/shared/types';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: cartItems[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartServericeService) {}

  ngOnInit(): void {
    this.cart = this.cartService.cart;
    this.totalPrice = this.cartService.totalAmount;
  }

  onIncreaseItem(id: number) {
    this.cartService.increaseCartItem(id);
    this.cart = this.cartService.cart;
    this.totalPrice = this.cartService.totalAmount;
  }

  onDecreaseItem(id: number) {
    this.cartService.decreaseCartItem(id);
    this.cart = this.cartService.cart;
    this.totalPrice = this.cartService.totalAmount;
  }

  onDeleteItem(id: number) {
    this.cartService.deleteCartItem(id);
    this.cart = this.cartService.cart;
    this.totalPrice = this.cartService.totalAmount;
  }
}
