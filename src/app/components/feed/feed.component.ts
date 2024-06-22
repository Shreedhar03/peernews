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
      img: 'https://picsum.photos',
    },
    {
      id: 2,
      title: 'Tech Innovations in 2024',
      description:
        'A roundup of the latest technological advancements and innovations expected to make an impact this year. From breakthroughs in artificial intelligence and machine learning to the latest developments in quantum computing, 2024 promises to be a landmark year for technology. Highlights include new AI-driven healthcare solutions, advancements in autonomous vehicles, and the emergence of 5G-enabled smart cities. These innovations are poised to transform industries and improve the quality of life for people around the world.',
      pubDate: '2024-06-16',
      author: 'John Smith',
      img: 'https://picsum.photos',
    },
    {
      id: 3,
      title: 'Global Climate Change Conference Highlights',
      description:
        'Key takeaways and commitments from the recent global climate change conference. Leaders from around the world gathered to discuss urgent environmental issues and to negotiate agreements aimed at reducing greenhouse gas emissions. Major outcomes include a renewed commitment to the Paris Agreement targets, significant pledges of financial support for developing countries, and the introduction of new policies to promote sustainable energy and conservation efforts. The conference also highlighted the growing role of businesses and local governments in addressing climate change.',
      pubDate: '2024-06-15',
      author: 'Alice Johnson',
      img: 'https://picsum.photos',
    },
    {
      id: 4,
      title: 'Sports Update: Championship Results',
      description:
        'Highlights and results from the latest championship games in various sports. The past week has been thrilling for sports fans, with several major tournaments concluding in dramatic fashion. In soccer, the Champions League final saw a nail-biting finish, with the winning team scoring in the final minutes of the match. The NBA Finals also concluded, with an underdog team taking the championship in a surprising upset. Meanwhile, tennis fans were treated to an epic five-set match in the Grand Slam final, showcasing incredible skill and endurance from both players.',
      pubDate: '2024-06-14',
      author: 'Mike Brown',
      img: 'https://picsum.photos',
    },
    {
      id: 5,
      title: 'Health and Wellness Trends',
      description:
        'Exploring the new trends in health and wellness that are gaining popularity in 2024. This year has seen a surge in interest in holistic health approaches, including mindfulness and meditation practices, plant-based diets, and personalized fitness plans. Innovations in wearable technology are also helping people track their health metrics more accurately than ever before. Additionally, there is a growing focus on mental health, with new therapies and apps designed to help individuals manage stress and anxiety. These trends reflect a broader shift towards a more balanced and proactive approach to health and wellness.',
      pubDate: '2024-06-13',
      author: 'Emma Davis',
      img: 'https://picsum.photos',
    },
    {
      id: 6,
      title: 'Economic Forecast for 2024',
      description:
        'Experts provide their economic outlook for 2024, predicting moderate growth amid a complex global landscape. Key factors influencing the forecast include geopolitical tensions, ongoing supply chain disruptions, and varying recovery rates from the pandemic across different regions. Despite these challenges, sectors such as technology, healthcare, and green energy are expected to drive growth. Policymakers are urged to focus on sustainable development and social equity to ensure a balanced and inclusive economic recovery.',
      pubDate: '2024-06-12',
      author: 'David Lee',
      img: 'https://picsum.photos',
    },
    {
      id: 7,
      title: 'Advances in Space Exploration',
      description:
        'The latest developments in space exploration include new missions to the moon and Mars, advancements in satellite technology, and the rise of commercial space travel. NASA and other space agencies are making significant progress on lunar bases and Mars exploration missions, while private companies are pioneering new technologies for space tourism and asteroid mining. These efforts are expanding our understanding of the universe and opening up new possibilities for space commerce and colonization.',
      pubDate: '2024-06-11',
      author: 'Linda Green',
      img: 'https://picsum.photos',
    },
    {
      id: 8,
      title: 'Education Reforms and Innovations',
      description:
        "Education systems around the world are undergoing significant reforms and embracing innovative practices. Key trends include the integration of technology in classrooms, personalized learning plans, and an increased emphasis on STEM education. These changes aim to better prepare students for the challenges of the 21st century. Additionally, there is a growing recognition of the importance of mental health and well-being in educational settings, with new initiatives focused on supporting students' emotional and psychological needs.",
      pubDate: '2024-06-10',
      author: 'Sophia Martinez',
      img: 'https://picsum.photos',
    },
    {
      id: 9,
      title: 'Cultural Festivals Around the World',
      description:
        'A look at some of the most vibrant cultural festivals happening around the world this year. From traditional celebrations to contemporary art festivals, these events offer a unique glimpse into the rich cultural heritage of different communities. Highlights include the Rio Carnival in Brazil, the Venice Biennale in Italy, and the Diwali Festival in India. These festivals not only provide entertainment but also promote cultural exchange and understanding.',
      pubDate: '2024-06-09',
      author: 'Tom Harris',
      img: 'https://picsum.photos',
    },
    {
      id: 10,
      title: 'Innovations in Renewable Energy',
      description:
        'Renewable energy technologies are advancing rapidly, with new developments in solar, wind, and hydroelectric power. These innovations are making renewable energy more efficient and cost-effective, helping to reduce our reliance on fossil fuels and combat climate change. Major projects include large-scale solar farms, offshore wind installations, and advancements in energy storage solutions. These efforts are crucial for achieving global sustainability goals and transitioning to a clean energy future.',
      pubDate: '2024-06-08',
      author: 'Rachel Adams',
      img: 'https://picsum.photos',
    },
    {
      id: 11,
      title: 'Breakthroughs in Medical Research',
      description:
        'Recent breakthroughs in medical research are paving the way for new treatments and therapies for a variety of diseases. Advances in gene editing, immunotherapy, and regenerative medicine are showing promise in the fight against cancer, genetic disorders, and chronic illnesses. Clinical trials and collaborations between researchers, pharmaceutical companies, and healthcare providers are accelerating the development of these cutting-edge treatments, offering hope to millions of patients worldwide.',
      pubDate: '2024-06-07',
      author: 'Michael Williams',
      img: 'https://picsum.photos',
    },
    {
      id: 12,
      title: 'Trends in Global Tourism',
      description:
        "Global tourism is experiencing a resurgence as travel restrictions ease and people seek new experiences. Key trends include an increased interest in sustainable and eco-friendly travel, the popularity of remote work-friendly destinations, and the rise of cultural and adventure tourism. Destinations are adapting to these trends by offering unique experiences that cater to travelers' evolving preferences, while also prioritizing the health and safety of visitors.",
      pubDate: '2024-06-06',
      author: 'Olivia Brown',
      img: 'https://picsum.photos',
    },
    {
      id: 13,
      title: 'Emerging Trends in the Automotive Industry',
      description:
        'The automotive industry is undergoing significant changes, driven by advancements in electric vehicles, autonomous driving technology, and smart mobility solutions. Major automakers are investing heavily in EV production, while startups are innovating in areas like ride-sharing and urban mobility. These trends are reshaping the industry, with a focus on sustainability, safety, and convenience. The shift towards electric and autonomous vehicles is expected to have a profound impact on transportation and the environment.',
      pubDate: '2024-06-05',
      author: 'James Miller',
      img: 'https://picsum.photos',
    },
    {
      id: 14,
      title: 'The Future of Work: Remote and Hybrid Models',
      description:
        'The COVID-19 pandemic has accelerated the adoption of remote and hybrid work models, leading to lasting changes in how businesses operate. Companies are increasingly offering flexible work arrangements, with a focus on work-life balance and employee well-being. Advances in communication and collaboration tools are enabling remote teams to stay connected and productive. As organizations navigate this new landscape, they are also rethinking office spaces and company culture to support a more distributed workforce.',
      pubDate: '2024-06-04',
      author: 'Emily Clark',
      img: 'https://picsum.photos',
    },
    {
      id: 15,
      title: 'Global Economic Policies and Their Impact',
      description:
        'An analysis of recent global economic policies and their impact on international trade, investment, and growth. Key topics include trade agreements, monetary policy, and fiscal stimulus measures. Policymakers are grappling with challenges such as inflation, supply chain disruptions, and geopolitical tensions. These policies are shaping the global economic landscape, influencing business decisions, and affecting the livelihoods of people around the world.',
      pubDate: '2024-06-03',
      author: 'Robert Johnson',
      img: 'https://picsum.photos',
    },
    {
      id: 16,
      title: 'Innovations in Food Technology',
      description:
        'Food technology is transforming the way we produce, distribute, and consume food. Innovations in areas like lab-grown meat, vertical farming, and food delivery services are addressing challenges such as food security, sustainability, and convenience. These advancements are reshaping the food industry, offering new solutions for feeding a growing global population. Consumers are also benefiting from healthier, more diverse food options that cater to various dietary needs and preferences.',
      pubDate: '2024-06-02',
      author: 'Lisa White',
      img: 'https://picsum.photos',
    },
    {
      id: 17,
      title: 'Global Health Initiatives and Challenges',
      description:
        'An overview of global health initiatives aimed at addressing major public health challenges. Efforts include vaccination campaigns, disease prevention programs, and healthcare access initiatives. Despite progress, significant challenges remain, such as health disparities, emerging infectious diseases, and the impact of climate change on health. International collaboration and investment in healthcare infrastructure are crucial for improving health outcomes and achieving global health goals.',
      pubDate: '2024-06-01',
      author: 'Paul Martin',
      img: 'https://picsum.photos',
    },
    {
      id: 18,
      title: 'Advances in Artificial Intelligence',
      description:
        'Artificial intelligence continues to advance rapidly, with new applications and technologies emerging across various industries. Key developments include improvements in natural language processing, machine learning, and computer vision. AI is being used to enhance customer experiences, optimize business operations, and drive innovation in fields such as healthcare, finance, and transportation. As AI technology evolves, ethical considerations and regulatory frameworks are becoming increasingly important to ensure its responsible use.',
      pubDate: '2024-05-31',
      author: 'Kevin Roberts',
      img: 'https://picsum.photos',
    },
    {
      id: 19,
      title: 'Sustainability in Fashion',
      description:
        'The fashion industry is embracing sustainability, with brands adopting eco-friendly practices and materials. Key trends include the use of recycled and biodegradable fabrics, ethical production methods, and a focus on reducing waste and carbon footprints. Consumers are becoming more conscious of the environmental impact of their fashion choices, driving demand for sustainable products. The shift towards sustainability is reshaping the fashion industry, promoting innovation and responsible consumption.',
      pubDate: '2024-05-30',
      author: 'Jessica Hall',
      img: 'https://picsum.photos',
    },
    {
      id: 20,
      title: 'Breakthroughs in Renewable Energy',
      description:
        'Renewable energy technologies are advancing rapidly, with new developments in solar, wind, and hydroelectric power. These innovations are making renewable energy more efficient and cost-effective, helping to reduce our reliance on fossil fuels and combat climate change. Major projects include large-scale solar farms, offshore wind installations, and advancements in energy storage solutions. These efforts are crucial for achieving global sustainability goals and transitioning to a clean energy future.',
      pubDate: '2024-05-29',
      author: 'Rachel Adams',
      img: 'https://picsum.photos',
    },
    {
      id: 21,
      title: 'Mental Health Awareness and Support',
      description:
        'Mental health awareness is gaining momentum, with increased recognition of the importance of mental well-being. Initiatives aimed at reducing stigma, providing support, and improving access to mental health services are making a positive impact. Key trends include the use of digital tools for mental health support, workplace wellness programs, and community-based interventions. These efforts are helping individuals manage stress, anxiety, and other mental health challenges, promoting a healthier and more resilient society.',
      pubDate: '2024-05-28',
      author: 'Sarah King',
      img: 'https://picsum.photos',
    },
    {
      id: 22,
      title: 'Trends in Digital Transformation',
      description:
        'Digital transformation is reshaping industries, driven by advancements in cloud computing, big data, and the Internet of Things (IoT). Organizations are leveraging these technologies to improve efficiency, enhance customer experiences, and drive innovation. Key trends include the adoption of AI and machine learning, the rise of remote work, and the increasing importance of cybersecurity. These transformations are enabling businesses to stay competitive and adapt to the evolving digital landscape.',
      pubDate: '2024-05-27',
      author: 'George Collins',
      img: 'https://picsum.photos',
    },
    {
      id: 23,
      title: 'Sustainable Agriculture Practices',
      description:
        'Sustainable agriculture practices are gaining traction as farmers and producers seek to reduce their environmental impact and improve food security. Key practices include organic farming, regenerative agriculture, and the use of precision farming technologies. These approaches aim to enhance soil health, conserve water, and reduce the use of chemical inputs. By adopting sustainable practices, the agriculture sector is working towards a more resilient and eco-friendly food system.',
      pubDate: '2024-05-26',
      author: 'Anna Turner',
      img: 'https://picsum.photos',
    },
    {
      id: 24,
      title: 'Innovations in Financial Technology',
      description:
        'Financial technology (fintech) is revolutionizing the way we manage money, with new solutions for banking, payments, and investments. Key innovations include mobile banking apps, blockchain technology, and robo-advisors. These advancements are making financial services more accessible, efficient, and secure. Fintech companies are also driving financial inclusion by providing services to underserved populations. The rapid growth of fintech is reshaping the financial industry and offering new opportunities for consumers and businesses alike.',
      pubDate: '2024-05-25',
      author: 'Mark Thompson',
      img: 'https://picsum.photos',
    },
    {
      id: 25,
      title: 'Cultural Heritage Preservation',
      description:
        'Efforts to preserve cultural heritage are gaining importance as communities seek to protect their history and identity. Key initiatives include the restoration of historical sites, the digitization of cultural artifacts, and the promotion of traditional crafts and practices. These efforts are supported by governments, NGOs, and local communities, working together to ensure that cultural heritage is preserved for future generations. The preservation of cultural heritage fosters a sense of pride and continuity, enriching our understanding of the past and its influence on the present.',
      pubDate: '2024-05-24',
      author: 'Laura Scott',
      img: 'https://picsum.photos',
    },
  ];
}
