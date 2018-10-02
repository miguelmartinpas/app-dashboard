import { HeroesComponent } from 'components/pages/heroes/heroes.component';
import { HeroDetailComponent } from 'components/pages/hero-detail/hero-detail.component';
import { MessagesComponent } from 'components/pages/messages/messages.component';
import { DashboardComponent } from 'components/pages/dashboard/dashboard.component';
import { LoginModalComponent } from 'components/pages/login/login.component';
import { PermissionsComponent } from 'components/pages/permissions/permissions.component';

export const pages = {
  heroes: HeroesComponent,
  heroDetail: HeroDetailComponent,
  message: MessagesComponent,
  dashboard: DashboardComponent,
  loginModal: LoginModalComponent,
  permissions: PermissionsComponent
};

export default Object.keys(pages).map(page => pages[page]);
