import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

// import { SidebarModule } from 'ng-sidebar';

import { AppComponent } from './app.component';
import components from 'components/configureComponents';

import { AppRoutingModule } from 'routes/app-routing.module';

import {SuiModule} from 'ng2-semantic-ui';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import rootReducers from 'store/reducers';

console.log('reducers', rootReducers);

@NgModule({
  declarations: [AppComponent, ...components],
  imports: [
    BrowserModule,
    // SidebarModule.forRoot(),
    SuiModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(rootReducers),
    // Note that you must instrument after importing StoreModule
    StoreDevtoolsModule.instrument({
      name: 'NgRx Book Store App',
      maxAge: 10
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*

10238  ng new angular-tour-of-heroes
10239  cd angular-tour-of-heroes
10240  cd ../angular-tour-of-heroes
10241  ng serve
10242  ng generate component heroes
10243  ng generate component hero-detail
10244  cd ../angular-tour-of-heroes
10245  ng serve
10246  cd ../angular-tour-of-heroes
10247  ng generate service hero
10248  ng generate component messages
10249  ng generate service message
10250  ng generate module app-routing --flat --module=app
10251  ng generate component dashboard

*/
