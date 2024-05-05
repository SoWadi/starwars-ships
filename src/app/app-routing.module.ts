import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SpaceshipsComponent } from './components/Spaceships/spaceships.component';
import { SpaceshipDetailComponent } from './components/spaceship-detail/spaceship-detail.component';
import { LoginComponent } from './components/account/login.component';
import { RegisterComponent } from './components/account/register.component';
//TODO: M Login et register componennts


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'starships', component: SpaceshipsComponent },
  {path: 'starships/:id', component: SpaceshipDetailComponent, },
  { path: 'account/login', component: LoginComponent },
  { path: 'account/register', component: RegisterComponent },
  //{ path: 'detail', component: SpaceshipDetailComponent }
      // otherwise redirect to home
      { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
