import { Component } from '@angular/core';
import { NewsItem } from '../../interfaces/news-item.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css',
})
export class FeedComponent {
  title = 'Feed';

  latestNews: NewsItem[] = [
    {
      id: 1,
      title: 'Breaking News: Market Hits Record High',
      description:
        'The stock market reached an all-time high today with major indices showing significant gains. Experts attribute this surge to a combination of positive economic data, strong corporate earnings reports, and investor optimism about future growth. The S&P 500, Dow Jones Industrial Average, and NASDAQ all closed at record levels, with technology and healthcare stocks leading the way. Analysts are advising caution, however, noting that markets can be volatile and subject to sudden changes.',
      pubDate: '2024-06-17',
      author: 'Jane Doe',
      img: 'https://picsum.photos/200/200',
    },
    {
      id: 2,
      title: 'Tech Innovations in 2024',
      description:
        'A roundup of the latest technological advancements and innovations expected to make an impact this year. From breakthroughs in artificial intelligence and machine learning to the latest developments in quantum computing, 2024 promises to be a landmark year for technology. Highlights include new AI-driven healthcare solutions, advancements in autonomous vehicles, and the emergence of 5G-enabled smart cities. These innovations are poised to transform industries and improve the quality of life for people around the world.',
      pubDate: '2024-06-16',
      author: 'John Smith',
      img: 'https://picsum.photos/200/200',
    },
    {
      id: 3,
      title: 'Global Climate Change Conference Highlights',
      description:
        'Key takeaways and commitments from the recent global climate change conference. Leaders from around the world gathered to discuss urgent environmental issues and to negotiate agreements aimed at reducing greenhouse gas emissions. Major outcomes include a renewed commitment to the Paris Agreement targets, significant pledges of financial support for developing countries, and the introduction of new policies to promote sustainable energy and conservation efforts. The conference also highlighted the growing role of businesses and local governments in addressing climate change.',
      pubDate: '2024-06-15',
      author: 'Alice Johnson',
      img: 'https://picsum.photos/200/200',
    },
    {
      id: 4,
      title: 'Sports Update: Championship Results',
      description:
        'Highlights and results from the latest championship games in various sports. The past week has been thrilling for sports fans, with several major tournaments concluding in dramatic fashion. In soccer, the Champions League final saw a nail-biting finish, with the winning team scoring in the final minutes of the match. The NBA Finals also concluded, with an underdog team taking the championship in a surprising upset. Meanwhile, tennis fans were treated to an epic five-set match in the Grand Slam final, showcasing incredible skill and endurance from both players.',
      pubDate: '2024-06-14',
      author: 'Mike Brown',
      img: 'https://picsum.photos/200/200',
    },
    {
      id: 5,
      title: 'Health and Wellness Trends',
      description:
        'Exploring the new trends in health and wellness that are gaining popularity in 2024. This year has seen a surge in interest in holistic health approaches, including mindfulness and meditation practices, plant-based diets, and personalized fitness plans. Innovations in wearable technology are also helping people track their health metrics more accurately than ever before. Additionally, there is a growing focus on mental health, with new therapies and apps designed to help individuals manage stress and anxiety. These trends reflect a broader shift towards a more balanced and proactive approach to health and wellness.',
      pubDate: '2024-06-13',
      author: 'Emma Davis',
      img: 'https://picsum.photos/200/200',
    },
  ];
}
