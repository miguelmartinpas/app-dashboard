import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import components from 'components/configureComponents';

import { AppRoutingModule } from 'routes/app-routing.module';

import {SuiModule} from 'ng2-semantic-ui';
import { GridsterModule } from 'angular-gridster2';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import rootReducers from 'store/reducers';

import firebaseConfig from '../../configs/firebase.config.js';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// console.log('reducers', rootReducers);

// console.log('app.module.ts', [...components]);

@NgModule({
  declarations: [AppComponent, ...components],
  exports: [AppComponent, ...components],
  entryComponents: [AppComponent, ...components].filter(c => c),
  imports: [
    BrowserModule,
    SuiModule,
    GridsterModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(rootReducers),
    AngularFireModule.initializeApp(firebaseConfig.database),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
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
