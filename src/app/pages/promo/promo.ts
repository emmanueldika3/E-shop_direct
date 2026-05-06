import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../../components/product-card/product-card';
import { Product } from '../../models/product';

@Component({
  selector: 'app-promo',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './promo.html',
  styleUrl: './promo.css'
})
export class Promo {
  // Sélection d'articles avec des prix cassés
  products: Product[] = [
    { 
      id: 601, 
      name: 'iPhone 15 Pro Max', 
      price: 1479000, 
      discountPrice: 1250000, // En promo !
      description: 'Le summum de la technologie Apple à prix réduit.', 
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 602, 
      name: 'Casque Gaming RGB', 
      price: 45000, 
      discountPrice: 25000, 
      description: 'Un son spatial 7.1 pour une immersion totale à prix mini.', 
      image: 'https://cdn.pixabay.com/photo/2020/09/23/02/01/headphones-5594702_1280.jpg' 
    },
    { 
      id: 603, 
      name: 'MacBook Air M2', 
      price: 950000, 
      discountPrice: 800000, 
      description: 'Ultra-fin, ultra-puissant, ultra-soldé.', 
      image: 'https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_1280.jpg' 
    }
  ];
}