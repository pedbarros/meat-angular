import { ErroHandler } from './../../app.error-handler';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MEAT_API } from '../../app.api';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Restaurant } from './restaurant.model';

@Injectable() //utilizado quando a classe irá receber um outro serviço por injeção de dependencia
export class RestaurantsService{

  constructor(private http: Http){}

  restaurants(): Observable<Restaurant[]>{
    return this.http
           .get(`${MEAT_API}/restaurants`)
           .map(res => res.json())
           .catch(ErroHandler.handleError)
  }
}
