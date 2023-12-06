import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgFor,
    FormsModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  cartItems: any[] = this.cartService.getCartItems();

  
  
  constructor(private cartService: CartService) {}

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }


}
