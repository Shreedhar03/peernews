import { Component } from '@angular/core';
import { NewsItem } from '../../interfaces/news-item.interface';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css',
})
export class FeedComponent {
  title = 'Feed';

  latestNews: NewsItem[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getNews().subscribe((news) => {
      this.latestNews = news.news;
      console.log({ news: this.latestNews });
    });
  }
}
