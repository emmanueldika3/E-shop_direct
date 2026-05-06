import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../../../components/common/product-card/product-card';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  public products = [
    {
      id: 1,
      name: 'Ordinateur Portable',
      price: 450000,
      discountPrice: 395000, // En promo
      isNew: false,
      description: 'PC performant pour le travail et les études',
      image: 'https://cdn.pixabay.com/photo/2014/09/24/14/29/laptop-460012_1280.jpg'
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 150000,
      isNew: true, // Nouveauté
      description: 'Téléphone Android avec bonne autonomie',
      image: 'https://cdn.pixabay.com/photo/2017/04/19/10/24/smartphone-2241694_1280.jpg'
    },
    {
      id: 3,
      name: 'Casque Audio',
      price: 25000,
      discountPrice: 15000, // Grosse promo
      description: 'Casque sans fil avec réduction de bruit',
      image: 'https://cdn.pixabay.com/photo/2018/01/16/10/36/headphones-3085681_1280.jpg'
    },
    {
      id: 4,
      name: 'Montre Connectée',
      price: 30000,
      isNew: true,
      description: 'Suivi de santé et notifications',
      image: 'https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_1280.jpg'
    },
    {
      id: 5,
      name: 'Clavier Gaming',
      price: 20000,
      description: 'Clavier RGB mécanique',
      image: 'https://cdn.pixabay.com/photo/2020/09/15/14/22/keyboard-5573752_1280.jpg'
    },
    {
      id: 6,
      name: 'Clavier Gaming Pro',
      price: 25000,
      discountPrice: 20000,
      description: 'Clavier RGB numérique retro-éclairé',
      image: 'https://cdn.pixabay.com/photo/2017/05/24/21/32/computer-2341642_1280.jpg'
    },
    {
      id: 7,
      name: 'PC portable i7',
      price: 175000,
      isNew: false,
      description: 'Core i7 9ème génération - Reconditionné A+',
      image: 'https://cdn.pixabay.com/photo/2014/05/02/21/50/laptop-336378_1280.jpg'
    },
    {
      id: 8,
      name: 'Maillot Real Madrid',
      price: 55000,
      discountPrice: 45000,
      isNew: true,
      description: 'Maillot original blanc 60% polyester 40% coton',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Jersey_Real_Madrid.png'
    }
  ];
}