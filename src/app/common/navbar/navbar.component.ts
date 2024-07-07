import { Component, Input, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';
import { User } from '../../interface/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  user: User | null = null;
  subscription: Subscription;

  constructor() {
    this.subscription = this.authService.getUsername();
    this.subscription = this.authService.signedInUser$.subscribe({next:(data)=>{this.user = data}})
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
