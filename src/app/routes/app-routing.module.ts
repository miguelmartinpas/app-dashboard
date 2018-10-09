import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { pages } from 'components/pages/pages';
// https://github.com/AlexKhymenko/ngx-permissions
// https://github.com/AlexKhymenko/ngx-permissions/wiki/Usage-with-routes
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
