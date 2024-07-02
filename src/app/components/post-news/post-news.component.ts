import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DividerComponent } from '../ui/divider/divider.component';

@Component({
  selector: 'app-post-news',
  standalone: true,
  imports: [ReactiveFormsModule, DividerComponent],
  templateUrl: './post-news.component.html',
  styleUrl: './post-news.component.css',
})
export class PostNewsComponent {
  postForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
  });

  constructor() {}

  onSubmit() {
    console.log(this.postForm.value);
  }
}
