import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../../components/product-card/product-card';
import { Product } from '../../models/product';

@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './tech.html',
  styleUrl: './tech.css'
})
export class Tech {
  // Liste de produits dédiée à l'informatique
  products: Product[] = [
    { 
      id: 101, 
      name: 'Dell XPS 13 Plus', 
      price: 1599, 
      description: 'L’ultraportable ultime avec écran OLED InfinityEdge.', 
      image: 'https://images.unsplash.com/photo-1517336714460-4c9889a10246?auto=format&fit=crop&q=80&w=800'    },
    { 
      id: 102, 
      name: 'Asus ROG Zephyrus G14', 
      price: 1899, 
      description: 'Le PC portable gaming le plus puissant de 14 pouces.', 
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 103, 
      name: 'Clavier Mécanique Keychron Q1', 
      price: 195, 
      description: 'Clavier custom en aluminium entièrement personnalisable.', 
      image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=800'
    },
    { 
      id: 104, 
      name: 'Écran LG UltraGear 27"', 
      price: 449, 
      description: 'Dalle Nano IPS 1ms avec un taux de rafraîchissement de 165Hz.', 
     image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 105, 
      name: 'Écran incurvé Samsung G9', 
      price: 1299, 
      description: 'Dalle Odyssey Neo G9 de 49 pouces pour une immersion totale.', 
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 106, 
      name: 'Clavier Razer BlackWidow', 
      price: 159, 
      description: 'Switch mécaniques verts pour un retour tactile précis.', 
      image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 107, 
      name: 'Carte Graphique RTX 4090', 
      price: 1999, 
      description: 'La puissance ultime pour le gaming 4K et le rendu 3D.', 
      image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 108, 
      name: 'Souris Logitech MX Master 3S', 
      price: 109, 
      description: 'La référence pour la productivité et le développement.', 
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 109, 
      name: 'Setup PC Custom White', 
      price: 250000, 
      description: 'Boîtier NZXT avec refroidissement liquide et RGB.', 
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=800' 
    }
  ];
}
