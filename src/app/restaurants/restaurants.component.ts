import { RestaurantsService } from './restaurant/restaurants.service';
import { Restaurant } from './restaurant/restaurant.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]
  constructor(private restarauntService: RestaurantsService) { }

  // chamado uma vez no ciclo: sempre que o component entrar na tela esse metodo é acionado
  ngOnInit() {
    this.restarauntService.restaurants()
      .subscribe( restaurants => this.restaurants = restaurants);
  }

}
