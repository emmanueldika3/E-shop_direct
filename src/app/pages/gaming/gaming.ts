import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../../components/product-card/product-card';
import { Product } from '../../models/product';

@Component({
  selector: 'app-gaming',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './gaming.html',
  styleUrl: './gaming.css'
})
export class Gaming {
  products: Product[] = [
    { 
      id: 501, 
      name: 'PlayStation 5 Slim', 
      price: 450000, 
      description: 'Vivez une immersion totale avec le retour haptique et l’audio 3D.', 
      image: 'https://cdn.pixabay.com/photo/2022/01/21/00/40/xbox-6953571_1280.jpg'
    },
    { 
      id: 502, 
      name: 'Xbox Series X', 
      price: 425000,  
      description: 'La Xbox la plus rapide et la plus puissante jamais conçue.', 
      image: 'https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=800&auto=format&fit=crop'    
    },
    { 
      id: 503, 
      name: 'Nintendo Switch OLED', 
      price: 280000, 
      description: 'Des couleurs éclatantes et un contraste élevé pour jouer partout.', 
      image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 504, 
      name: 'Manche DualSense Edge', 
      price: 150000, 
      description: 'Une manette ultra-performante et entièrement personnalisable.', 
      image: 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&q=80&w=800' 
    }
  ];
}