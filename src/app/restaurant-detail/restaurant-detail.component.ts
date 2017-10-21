import { ActivatedRoute } from '@angular/router';
import { Restaurant } from './../restaurants/restaurant/restaurant.model';
import { RestaurantsService } from './../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private restaurantService: RestaurantsService,
              private activateRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.restaurantService.restaurantById(this.activateRoute.snapshot.params['id'])
        .subscribe( restaurant => this.restaurant = restaurant);
  }

}
