import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../service/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  error:any;
  model = {
    username:"",
    email:"",
    password:"",
    password_confirm:"",
  }

  signUp(userData: NgForm) {
    this.authService.signUp(userData).subscribe({
      next : () => {
        console.log("Success!");
        this.router.navigate(['/sign-in'], {
          queryParams: {
            email: userData.value.email
          }
        });
      },
      error : (err) => {
        console.log(err);
        this.error = err.error;
      }
    });
  }
}
