import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../../components/product-card/product-card';
import { Product } from '../../models/product';

@Component({
  selector: 'app-accessories',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './accessories.html',
  styleUrl: './accessories.css'
})
export class Accessories {
  // Liste dédiée aux accessoires (IDs commençant par 300)
  products: Product[] = [
    { 
      id: 301, 
      name: 'AirPods Pro (2nd Gen)', 
      price: 279, 
      description: 'Réduction de bruit active deux fois plus performante.', 
      image: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 302, 
      name: 'Samsung Galaxy Watch 6', 
      price: 329, 
      description: 'Suivi avancé du sommeil et analyse de la composition corporelle.', 
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 303, 
      name: 'Chargeur MagSafe Apple', 
      price: 49, 
      description: 'Alignement magnétique parfait pour une recharge sans fil rapide.', 
      image: 'https://images.unsplash.com/photo-1615526675159-e248c3021d3f?auto=format&fit=crop&q=80&w=800' 
    }
  ];
}
