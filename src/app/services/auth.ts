import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8000/api'; 

  // Signal pour suivre l'utilisateur en temps réel
  currentUser = signal<any>(null);
//login
  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        if (response.access_token) {
          localStorage.setItem('auth_token', response.access_token);
          this.currentUser.set(response.user);
        }
      })
    );
  }
  //register
  register(userData: any): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/register`, userData).pipe(
    tap(response => {
      // Si Laravel renvoie un token après l'inscription
      if (response.access_token) {
        localStorage.setItem('auth_token', response.access_token);
        this.currentUser.set(response.user);
      }
    })
  );
}
//logout
  logout(): void {
    localStorage.removeItem('auth_token');
    this.currentUser.set(null);
  }

  isLoggedIn(): boolean {
    // Vérifie si on est dans le navigateur pour éviter des erreurs SSR
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem('auth_token');
    }
    return false;
  }
}