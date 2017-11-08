import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';
import { API } from './../app.api';
import { ErroHandler } from './../app.error-handler';
import { Restaurant } from './restaurant/restaurant.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable() //utilizado quando a classe irá receber um outro serviço por injeção de dependencia
export class RestaurantsService{

  constructor(private http: HttpClient){}

  restaurants(search?: string): Observable<Restaurant[]>{
    let params: HttpParams = undefined
    if (search){
      params = new HttpParams().append('q', search)
    }

    return this.http
           .get<Restaurant[]>(`${API}/restaurants`, {params: params})
  }

  restaurantById(id: string): Observable<Restaurant>{
    return this.http.get<Restaurant>(`${API}/restaurants/${id}`)
  }

  reviewsOfRestaurant(id: string): Observable<any>{
      return this.http.get(`${API}/restaurants/${id}/reviews`)
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]>{
    return this.http.get<MenuItem[]>(`${API}/restaurants/${id}/menu`)
  }
}
