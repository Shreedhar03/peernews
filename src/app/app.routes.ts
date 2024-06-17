import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FeedComponent } from './components/feed/feed.component';
import { SingleNewsComponent } from './components/single-news/single-news.component';

export const routes: Routes = [
  {
    path: '',
    component: FeedComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'news/:id',
    component: SingleNewsComponent,
  },
];
