import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkOrderComponent } from "./work-order/work-order.component";
import { BillComponent } from "./bill/bill.component";
import { QuoteComponent } from "./quote/quote.component";

const routes: Routes = [
  {
    path:'',
    component: WorkOrderComponent
  },
  {
    path:'workOrder',
    component: WorkOrderComponent
  },
  {
    path:'quote',
    component: QuoteComponent
  },
  {
    path:'bill',
    component: BillComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
