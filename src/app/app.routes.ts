import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurants',  component: RestaurantsComponent },
  { path: 'restaurants/:id',  component: RestaurantDetailComponent},
  { path: 'about',  component: AboutComponent },
];
