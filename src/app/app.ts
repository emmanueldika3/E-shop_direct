// import { Component, signal } from '@angular/core';
// import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
// import { Home } from "./pages/main/home/home";

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
//   protected readonly title = signal('demo_app');
// }

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './pages/navbar/navbar'; // 1. On l'importe ici
import { Footer } from './pages/main/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer], // 2. On l'ajoute dans la liste des composants utilisés
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'mon-eshop';
}
