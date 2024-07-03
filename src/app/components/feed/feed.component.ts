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

  pageSize = 5;
  currentPage = 1;

  get paginatedNews(): NewsItem[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.latestNews.slice(startIndex, startIndex + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.latestNews.length / this.pageSize);
  }

  // array of numbers from 1 to totalPages
  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  prevPage(): void {
    // scroll to top
    window.scrollTo(0, 0);
    this.currentPage = Math.max(1, this.currentPage - 1);
  }

  nextPage(): void {
    // scroll to top
    window.scrollTo(0, 0);
    this.currentPage = Math.min(this.totalPages, this.currentPage + 1);
  }

  changePage(page: number): void {
    // scroll to top
    window.scrollTo(0, 0);
    this.currentPage = page;
  }

  ngOnInit() {
    this.api.getNews().subscribe((news) => {
      this.latestNews = news.news;
      console.log({ news: this.latestNews });
    });
  }
  // pagination
}
