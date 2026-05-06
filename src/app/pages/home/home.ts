import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Product{
  name: string,
  category: string,
  price: string,
  image: string,
  badge: string,
  colorClass: string
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  // Signal pour gérer l'ouverture du pop-up publicitaire
  showAd = signal(false);

  products: Product[] = [
    {
      name: 'MacBook Pro M3 Max',
      category: 'Ordinateur',
      price: '2,450,000',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
      badge: 'Nouveau',
      colorClass: 'text-blue-600'
    },
    {
      name: 'Sony WH-1000XM5',
      category: 'Audio',
      price: '275,000',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      badge: '-10%',
      colorClass: 'text-indigo-600'
    },
    {
      name: 'iPhone 15 Pro Titanium',
      category: 'Smartphone',
      price: '890,000',
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800', // Focus sur le Titanium
      badge: 'Populaire',
      colorClass: 'text-cyan-600'
    },
    {
      name: 'PlayStation 5 Slim',
      category: 'Gaming',
      price: '425,000',
      image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3', // Focus Manette/Console Next-Gen
      badge: 'Stock Limité',
      colorClass: 'text-purple-600'
    }
  ];

  ngOnInit() {
    // Affiche la pub après 2 secondes
    setTimeout(() => {
      this.showAd.set(true);
    }, 2000);
  }

  closeAd() {
    this.showAd.set(false);
  }
}

