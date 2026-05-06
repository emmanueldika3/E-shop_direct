import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // 1. On importe le module de navigation

@Component({
  selector: 'app-nav-menu',
  standalone: true, // Assure-toi que cette ligne est présente
  imports: [RouterModule], // 2. On l'ajoute ICI pour activer les liens
  templateUrl: './nav-menu.html',
  styleUrl: './nav-menu.css',
})
export class NavMenu {}