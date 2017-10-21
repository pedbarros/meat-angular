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

  restaurants(): Observable<Restaurant[]>{
    return this.http
           .get(`${API}/restaurants`)
           .map(res => res.json())
           .catch(ErroHandler.handleError)
  }
}
