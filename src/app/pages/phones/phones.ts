import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../../components/product-card/product-card';
import { Product } from '../../models/product';

@Component({
  selector: 'app-phones',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './phones.html',
  styleUrl: './phones.css'
})
export class Phones {
  // Liste dédiée aux mobiles (IDs commençant par 200)
  products: Product[] = [
    { 
      id: 201, 
      name: 'Samsung Galaxy S24 Ultra', 
      price: 1459, 
      description: 'L’intelligence artificielle au service de la photo et de la productivité.', 
image: 'https://cdn.pixabay.com/photo/2017/04/19/10/24/smartphone-2241694_1280.jpg'    },
    { 
      id: 202, 
      name: 'iPhone 15 Pro Max', 
      price: 1479000, 
      description: 'Le summum de la vidéo mobile avec le nouveau bouton Action.', 
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 203, 
      name: 'Google Pixel 8 Pro', 
      price: 1099, 
      description: 'Le meilleur de Google avec un appareil photo incroyablement intelligent.', 
      image: 'https://images.unsplash.com/photo-1696428714080-602058864724?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 204, 
      name: 'Nothing Phone (2)', 
      price: 679, 
      description: 'Un design unique avec l’interface Glyph pour rester concentré.', 
      image: 'https://images.unsplash.com/photo-1689257653243-7f1542f790bc?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 205, 
      name: 'Xiaomi 14 Ultra', 
      price: 1499, 
      description: 'Une véritable caméra professionnelle dans le creux de votre main.', 
      image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 206, 
      name: 'Samsung Galaxy Z Fold 5', 
      price: 1899, 
      description: 'L’écran pliable ultime pour transformer votre mobile en tablette.', 
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800' 
    }
  ];
}
