import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { User } from '../../interfaces/user-interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),
  });

  constructor(private service: ApiService) {}

  onSubmit() {
    console.log(this.registerForm.value);
    if (
      this.registerForm.value.password !==
      this.registerForm.value.confirmPassword
    ) {
      alert('Passwords do not match');
      return;
    }

    // user obejct
    const user: User = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
    };
    this.service.registerUser(user).subscribe((data) => {
      console.log(data);
    });
  }
}
