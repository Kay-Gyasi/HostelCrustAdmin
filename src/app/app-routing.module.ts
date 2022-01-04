import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedOrdersComponent } from './components/completed-orders/completed-orders.component';
import { CustomersComponent } from './components/customers/customers.component';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path: '', component:OrdersComponent},
  {path: 'products', component:ProductsComponent, children:[
    {path: 'edit/:prod', component:EditComponent}
  ]},
  {path:'completed-orders', component:CompletedOrdersComponent},
  {path: 'customers', component:CustomersComponent},
  {path: 'details/:num', component:DetailsComponent},
  {path:'**', component:OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
