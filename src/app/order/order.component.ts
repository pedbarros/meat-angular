import {  Router } from '@angular/router';
import { Order, OrderItem } from './order.model';
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { OrderService } from './order.service';
import { RadioOption } from '../../shared/radio/radio-option.model';
import { Component, OnInit } from '@angular/core';
// import
@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {
  delivery = 8

  paymentOptions : RadioOption[] = [
    {label: "Dinheiro", value: 'MON'},
    {label: "Cartão de Débito", value: 'DEB'},
    {label: "Ticket Alimentação", value: 'TIC'}
  ]

  constructor(private orderService: OrderService,
              private router: Router) { }

  ngOnInit() {}

  itemsValue():number{
    return this.orderService.itemsValue()
  }

  cartItems(): CartItem[]{
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.orderService.remove(item)
  }



  checkOrder(order: Order){
    order.orderItems = this.cartItems()
                          .map( (item: CartItem) => new OrderItem(item.quantity, item.menuItem.id))
    this.orderService.checkOrders(order)
          .subscribe( ( orderId: string  ) => {
            this.router.navigate(['/order-summary'])
            console.log(`Compra concluída ${orderId}`)
          })
    this.orderService.clear();
    console.log(order)
  }

}
