import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor(private service: ApiService) {}

  onSubmit() {
    console.log(this.loginForm.value);
    // user obejct
    const { username, password } = this.loginForm.value;
    this.service.loginUser(username, password).subscribe((data) => {
      console.log(data);
    });
  }
}
