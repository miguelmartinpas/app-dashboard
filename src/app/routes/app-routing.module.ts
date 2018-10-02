import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { DashboardComponent } from 'components/dashboard/dashboard.component';
// import { PermissionsComponent } from 'components/permissions/permissions.component';
// import { HeroesComponent } from 'components/heroes/heroes.component';
// import { HeroDetailComponent } from 'components/pages';

import { pages } from 'components/pages/pages';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: pages.dashboard },
  { path: 'permissions', component: pages.permissions },
  { path: 'heroes', component: pages.heroes },
  { path: 'detail/:id', component: pages.heroDetail }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
