import { OrderComponent } from './order.component';
import { Route, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

export class LeaveOrderGuard implements CanDeactivate<OrderComponent>{
  canDeactivate(orderComponent: OrderComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot): boolean{
    if (!orderComponent.isOrderCompleted()){
      return window.confirm('Deseja desistir da compra?')
    } else {
      return true
    }
  }
}
