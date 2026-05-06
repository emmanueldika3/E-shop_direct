// navbar.ts
import { Component } from '@angular/core';
import { Topbar } from './topbar/topbar';
import { SearchBar } from './topbar/search-bar/search-bar';
import { NavMenu } from './nav-menu/nav-menu';
import { AccountButton } from "./account-button/account-button";
import { Logo } from './logo/logo';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [Topbar, SearchBar, NavMenu, AccountButton, Logo],
  templateUrl: './navbar.html', 
  styleUrls: ['./navbar.css']
})
export class Navbar { } 