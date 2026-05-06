import { Component, inject } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // <--- 1. Vérifie cet import
import { CartService } from '../../../services/cart';

@Component({
  selector: 'app-account-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-button.html', 
  styleUrl: './account-button.css'      
})
export class AccountButton {
  private cartService = inject(CartService);
  private router = inject(Router); // <--- 2. IL MANQUE CERTAINEMENT CETTE LIGNE ICI
  
  items = this.cartService.cartItems;
  cartCount = this.cartService.cartCount;

  retirer(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  commander() {
    if (this.items().length === 0) return;

    // Maintenant 'this.router' existera bien sur la classe
    this.router.navigate(['/checkout']);
  }
}