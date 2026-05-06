import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { AuthService } from '../services/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html'
})
export class Login {
  // On type explicitement pour aider VS Code
  authService = inject(AuthService);
  router = inject(Router);

  loginData = { email: '', password: '' };

  onSubmit() {
    this.authService.login(this.loginData).subscribe({
      next: (res: any) => {
        console.log('Connexion réussie !');
        this.router.navigate(['/']);
      },
      error: (err: any) => { // "err: any" règle la plainte sur le type inconnu
        console.error(err);
        alert('Erreur : Identifiants invalides');
      }
    });
  }
}