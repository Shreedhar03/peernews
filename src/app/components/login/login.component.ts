import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  error: String = '';

  constructor(private service: ApiService) {}

  onSubmit() {
    console.log(this.loginForm.value);
    // user obejct
    const { username, password } = this.loginForm.value;

    if (this.loginForm.valid) {
      this.service.loginUser(String(username), String(password)).subscribe({
        next: (data) => {
          console.log(data);
          this.error = '';
        },
        error: (error) => {
          console.log(error);
          switch (error.status) {
            case 401:
              this.error = 'Invalid username or password';
              break;
            default:
              this.error = 'An error occurred';
              break;
          }
        },
      });
    }
  }
}
