import { OrderSummaryComponent } from './order/order-summary/order-summary.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurants',  component: RestaurantsComponent },
  { path: 'restaurants/:id',  component: RestaurantDetailComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      { path: 'menu', component: MenuComponent },
      { path: 'reviews', component: ReviewsComponent }
    ]
  },
  { path: 'order',  loadChildren: './order/order.module#OrderModule'},
  { path: 'order-summary',  component: OrderSummaryComponent },
  { path: 'about',  loadChildren: './about/about.module#AboutModule' },
];
