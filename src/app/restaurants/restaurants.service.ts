import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';
import { API } from './../app.api';
import { ErroHandler } from './../app.error-handler';
import { Restaurant } from './restaurant/restaurant.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable() //utilizado quando a classe irá receber um outro serviço por injeção de dependencia
export class RestaurantsService{

  constructor(private http: Http){}

  restaurants(search?: string): Observable<Restaurant[]>{
    return this.http
           .get(`${API}/restaurants`, {params: { q: search }})
           .map(res => res.json())
           .catch(ErroHandler.handleError)
  }

  restaurantById(id: string): Observable<Restaurant>{
    return this.http.get(`${API}/restaurants/${id}`)
           .map(res => res.json())
           .catch(ErroHandler.handleError)
  }

  reviewsOfRestaurant(id: string): Observable<any>{
      return this.http.get(`${API}/restaurants/${id}/reviews`)
      .map(res => res.json())
      .catch(ErroHandler.handleError)
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]>{
    return this.http.get(`${API}/restaurants/${id}/menu`)
    .map(res => res.json())
    .catch(ErroHandler.handleError)
  }
}
