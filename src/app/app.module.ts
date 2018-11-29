import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginService } from './services/login.service';
import { SignUpService } from './services/sign-up.service';
import { SearchFlightsService } from './services/search-flights.service';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { NgxPaginationModule } from 'ngx-pagination';

const routes=[
  {path: '', redirectTo: '/login', pathMatch: "full"},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'search-flights', component: SearchFlightsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    SearchFlightsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoginService, SignUpService, SearchFlightsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
