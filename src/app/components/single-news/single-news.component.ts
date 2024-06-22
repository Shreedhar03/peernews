import { Component } from '@angular/core';
import { NewsItem } from '../../interfaces/news-item.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-news',
  standalone: true,
  imports: [],
  templateUrl: './single-news.component.html',
  styleUrl: './single-news.component.css',
})
export class SingleNewsComponent {
  title = 'Single News';
  news: NewsItem = {
    id: 1,
    title: 'Tech Innovations in 2024',
    description:
      'A roundup of the latest technological advancements and innovations expected to make an impact this year. From breakthroughs in artificial intelligence and machine learning to the latest developments in quantum computing, 2024 promises to be a landmark year for technology. Highlights include new AI-driven healthcare solutions, advancements in autonomous vehicles, and the emergence of 5G-enabled smart cities. These innovations are poised to transform industries and improve the quality of life for people around the world.',
    pubDate: '2024-06-16',
    author: 'John Smith',
    img: 'https://picsum.photos',
  };

  showFullNews = false;

  // get dynamic id from route params
  constructor(private router: Router) {}

  routeId: number = 0;

  ngOnInit() {
    const id = this.router.url.split('/').pop();
    console.log(id);
    this.routeId = id ? parseInt(id) : 0;
    // fetch news item with id from API
    // this.news = this.newsService.getNewsById(id);
  }
  toggleFullNews() {
    this.showFullNews = !this.showFullNews;
  }
}
