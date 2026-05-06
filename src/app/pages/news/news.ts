import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../../components/product-card/product-card';
import { Product } from '../../models/product'; // Vérifie bien le chemin vers ton modèle

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './news.html',
  styleUrl: './news.css'
})
export class News {
  // Ton tableau de produits avec des liens d'images (URLs)
products: Product[] = [
  { 
    id: 1, 
    name: 'iPhone 15 Pro Titanium', 
    price: 1200, 
    description: 'Le dernier smartphone d\'Apple avec châssis en titane et puce A17 Pro.', 
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692846360609' 
  },
  { 
    id: 2, 
    name: 'MacBook Air M3', 
    price: 1400, 
    description: 'Ultra-fin et ultra-rapide avec l\'architecture Apple Silicon M3.', 
    image: 'https://www.apple.com/v/macbook-air/s/images/overview/m3/design_midnight__bsv60920m76u_large.jpg' 
  },
  { 
    id: 3, 
    name: 'Sony WH-1000XM5', 
    price: 350, 
    description: 'Casque à réduction de bruit sans fil leader du marché.', 
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 4, 
    name: 'PS5 Slim Edition', 
    price: 549, 
    description: 'La console nouvelle génération plus compacte.', 
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 5, 
    name: 'Logitech G Pro X Superlight', 
    price: 129, 
    description: 'Souris gaming sans fil ultra-légère.', 
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 6, 
    name: 'iPad Pro M2', 
    price: 1050, 
    description: 'L\'expérience iPad ultime avec écran Liquid Retina.', 
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800' 
  }
];
}