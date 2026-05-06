import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app'; // On change App par AppComponent

bootstrapApplication(AppComponent, appConfig) // On utilise AppComponent ici aussi
  .catch((err) => console.error(err));