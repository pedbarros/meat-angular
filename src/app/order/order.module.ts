import { LeaveOrderGuard } from './leave-order.guard';
import { SharedModule } from './../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { OrderComponent } from './order.component';
import { NgModule } from '@angular/core';

const ROUTES: Routes = [
  {path: '', component: OrderComponent, canDeactivate: [LeaveOrderGuard]}
]

@NgModule({
  declarations:[OrderComponent, OrderItemComponent,
                DeliveryCostsComponent],
  imports:[SharedModule,
           RouterModule.forChild(ROUTES)]
})
export class OrderModule{}
