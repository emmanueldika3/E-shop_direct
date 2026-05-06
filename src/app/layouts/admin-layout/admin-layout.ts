import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }


  logout(event: PointerEvent) {
    console.log("Log");
    console.log(event);
    console.log(event.target);
    this.router.navigate(["/home"]);
  }
}
