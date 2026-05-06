import { Component, inject, computed, signal } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, NonNullableFormBuilder, Validators } from '@angular/forms';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './checkout.html',
})
export class Checkout {
  private location = inject(Location);
  private router = inject(Router);
  private cartService = inject(CartService);
  private fb = inject(NonNullableFormBuilder);

  // Variable pour basculer l'affichage du message de succès
  isOrderSuccess = false;

  items = this.cartService.cartItems;
  subtotal = this.cartService.totalAmount; 
  
  deliveryFee = 1500;
  total = computed(() => this.subtotal() + this.deliveryFee);

  checkoutForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
    neighborhood: ['', [Validators.required]],
    addressDetails: ['']
  });

  goBack() {
    this.location.back();
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      // 1. Logique d'envoi (on simule l'enregistrement)
      console.log('Commande validée !', this.checkoutForm.value);
      
      // 2. On affiche le message de succès dans le HTML
      this.isOrderSuccess = true;

      // 3. On vide le panier
      this.cartService.clearCart();

      // 4. On attend 3 secondes avant de rediriger vers l'accueil
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 10000);
    } else {
      // Si le formulaire est invalide, on marque tous les champs comme touchés pour afficher les erreurs
      this.checkoutForm.markAllAsTouched();
    }
  }
}