import { Component } from '@angular/core';
import { NewsItem } from '../../interfaces/news-item.interface';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-single-news',
  standalone: true,
  imports: [],
  templateUrl: './single-news.component.html',
  styleUrl: './single-news.component.css',
})
export class SingleNewsComponent {
  title = 'Single News';
  news: NewsItem = {} as NewsItem;
  notFound: Boolean = false;

  showFullNews = false;

  // get dynamic id from route params
  constructor(private router: Router, private api: ApiService) {}

  routeId: number = 0;

  ngOnInit() {
    const id = this.router.url.split('/').pop();
    console.log(id);
    this.routeId = id ? parseInt(id) : 0;

    this.api.getNewsById(id?.toString() ?? '').subscribe(
      (news) => {
        this.news = news;
        console.log({ news: this.news });
        this.notFound = false;
      },
      (error) => {
        this.notFound = true;
      }
    );
  }
  toggleFullNews() {
    this.showFullNews = !this.showFullNews;
  }
}
