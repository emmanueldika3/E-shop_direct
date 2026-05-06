import { Component, Input, inject } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() product!: Product; 

  private cartService = inject(CartService);

// Dans product-card.ts
ajouter() {
  // On envoie 'this.product' au lieu de rien du tout
  this.cartService.addToCart(this.product); 
}
}