
import { API } from './../app.api';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Order, OrderItem } from './order.model';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {
  constructor(private http: Http, private cartService: ShoppingCartService){

  }

  cartItems(): CartItem[]{
    return this.cartService.items
  }

  itemsValue():number{
    return this.cartService.total()
  }

  increaseQty(item: CartItem){
    this.cartService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.cartService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.cartService.removeItem(item)
  }

  clear(){
    this.cartService.clear()
  }

  checkOrders(order: Order): Observable<string>{
    const headers = new Headers()
    headers.append('Content-type', 'application/json')
    return this.http.post(`${API}/orders`,
                          JSON.stringify(order),
                          new RequestOptions({headers: headers}))
                          .map( response => response.json())
                          .map( order => order.id)
  }
}
