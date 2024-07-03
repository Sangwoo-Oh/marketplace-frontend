import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { Subscription } from 'rxjs';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'marketplace';
  authService : AuthService = inject(AuthService);
  subscription: Subscription;
  constructor() {
    this.subscription = this.authService.loggedOut$.subscribe(
      {next:(data)=>{
        window.location.reload()
      }
    })
  }
}
