import { Component } from '@angular/core';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  model = {
    username:"",
    email:"",
    password:"",
    password_confirm:"",
  }
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
}
