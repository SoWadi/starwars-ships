import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { SpaceshipsComponent } from './components/Spaceships/spaceships.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SpaceshipDetailComponent } from './components/spaceship-detail/spaceship-detail.component';
import { starWarsService } from './components/services/starWars.service';
import { LoginComponent, RegisterComponent } from './components/account';
import { AccountService } from './components/services/account.service';
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './components/_helpers';




@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  declarations: [
    AppComponent,
    SpaceshipsComponent,
    HeaderComponent,
    HomeComponent,
    SpaceshipDetailComponent,
    LoginComponent,
    RegisterComponent,
  ],
  providers: [starWarsService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,],
  bootstrap: [AppComponent]
})
export class AppModule { }
