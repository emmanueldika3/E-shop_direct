import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/product';

// Interface étendue pour inclure la quantité
export interface CartItem extends Product {
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  // Signal privé pour gérer l'état du panier
  private items = signal<CartItem[]>([]);

  // Signal en lecture seule pour les composants
  cartItems = this.items.asReadonly();

  // Compteur total d'articles (ex: 2 maillots + 1 short = 3)
  cartCount = computed(() => 
    this.items().reduce((acc, item) => acc + item.quantity, 0)
  );

  /**
   * AJOUT : Calcul du montant total financier (FCFA)
   * Très utile pour ta page Checkout !
   */
  totalAmount = computed(() => 
    this.items().reduce((acc, item) => acc + (item.price * item.quantity), 0)
  );

  addToCart(product: Product) {
    this.items.update(list => {
      const existingItem = list.find(item => item.id === product.id);

      if (existingItem) {
        return list.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }

      return [...list, { ...product, quantity: 1 }];
    });
  }

  removeFromCart(productId: number) {
    this.items.update(list => {
      const existingItem = list.find(item => item.id === productId);

      if (existingItem && existingItem.quantity > 1) {
        return list.map(item => 
          item.id === productId 
            ? { ...item, quantity: item.quantity - 1 } 
            : item
        );
      }
      
      return list.filter(item => item.id !== productId);
    });
  }

  // Vide le panier après validation de la commande
  clearCart() {
    this.items.set([]);
  }
  
}