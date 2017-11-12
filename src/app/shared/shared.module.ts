import { LoggedInGuard } from './../security/loggedin.guard';
import { LoginService } from './../security/login/login.service';
import { NotificationService } from './message/notification.service';
import { SnackbarComponent } from './message/snackbar/snackbar.component';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { OrderService } from './../order/order.service';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';
import { InputComponent } from './input/input.component';
import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
  declarations:[InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports:[InputComponent, RadioComponent,
           RatingComponent, SnackbarComponent,
           CommonModule, FormsModule, ReactiveFormsModule]

})
export class SharedModule{
  // permite adicionar modulos de providers
  static forRoot(): ModuleWithProviders{
    return {
      ngModule: SharedModule,
      providers:  [ShoppingCartService, OrderService,
                   RestaurantsService, NotificationService,
                   LoginService, LoggedInGuard]
    }
  }
}
