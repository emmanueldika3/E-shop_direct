import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountButton } from '../../account-button/account-button';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, AccountButton], // CommonModule est nécessaire pour le *ngIf
  templateUrl: './search-bar.html'
})
export class SearchBar {
  cartCount: number = 3; // <-- Elle doit être ICI
}