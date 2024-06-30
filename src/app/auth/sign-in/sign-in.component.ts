import { Component, inject } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);
  model = {
    email:"",
    password:"",
  }
  error?:HttpErrorResponse;

  constructor () {
    const email = this.route.snapshot.queryParams['email'];
    if (email) {
      this.model.email = email;
    }
  }
  signIn(userData: NgForm) {
    this.authService.signIn(userData).subscribe({
      next : (result)=>{
        console.log(result);
        this.router.navigate(['/']);
      },
      error: (err)=>{
        console.error(err);
        this.error = err.error;
      }
    });
  }

}
