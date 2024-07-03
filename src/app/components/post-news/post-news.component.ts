import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DividerComponent } from '../ui/divider/divider.component';
import { ApiService } from '../../services/api.service';
import { NewsItem } from '../../interfaces/news-item.interface';
import { Router } from '@angular/router';

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

  constructor(private api: ApiService, private router: Router) {}

  onSubmit() {
    if (this.postForm.invalid) {
      return;
    }
    const news: NewsItem = {
      title: this.postForm.value.title ?? '',
      content: this.postForm.value.content ?? '',
      // date in format 'dd/mm/yyyy'
      date: new Date().toLocaleDateString(),
      authorId: '66842630a66d36582a78daeb',
    };
    this.api.postNews(news).subscribe(
      (response) => {
        console.log({ response });
        this.router.navigate(['/']);
      },
      (error) => {
        console.error({ error });
        this.router.navigate(['/']);
      }
    );
  }
}
