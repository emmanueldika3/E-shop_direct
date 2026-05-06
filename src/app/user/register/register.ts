import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './register.html'
})
export class Register {
  private auth = inject(AuthService);
  private router = inject(Router);

  registerData = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '' // Important pour Laravel
  };

  onSubmit() {
    // On pourrait ajouter une vérification ici si les mots de passe correspondent
    if (this.registerData.password !== this.registerData.password_confirmation) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }

    // On appelle une méthode register (qu'on va ajouter à ton AuthService)
    this.auth.register(this.registerData).subscribe({
      next: (res: any) => {
        console.log('Compte créé avec succès !');
        this.router.navigate(['/']);
      },
      error: (err: any) => {
        console.error('Erreur inscription:', err);
        alert('Erreur lors de l\'inscription. Vérifiez vos données.');
      }
    });
  }
}
