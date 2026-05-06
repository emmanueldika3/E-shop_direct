import { Component, Input } from '@angular/core';
import { Product } from '../../../models/product';



@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input({required: true}) public product!: Product;
  @Input({required: true}) public even!: boolean;
  @Input({required: true}) public odd!: boolean;
}
