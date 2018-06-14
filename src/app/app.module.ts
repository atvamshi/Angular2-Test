import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import {DataService} from './services/data.service';
import { AboutComponent } from './components/about/about.component'

//Creating routes
const appRoutes : Routes = [
  {path:'', component: UsersComponent},
  {path:'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
