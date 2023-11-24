import { Routes } from '@angular/router';
import { AboutComponent } from './components/portfolio/pages/about/about.component';
import { SkillsComponent } from './components/portfolio/pages/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/pages/portfolio/portfolio.component';
import { NotFoundComponent } from './components/portfolio/pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: AboutComponent, title: 'About Page' },
  { path: 'skills', component: SkillsComponent, title: 'Skills Page' },
  { path: 'portfolio', component: PortfolioComponent, title: 'Portfolio Page' },
  { path: '**', component: NotFoundComponent },
];
