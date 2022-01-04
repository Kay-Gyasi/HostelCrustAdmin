import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from'@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedService } from './components/service/shared.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { CustomersComponent } from './components/customers/customers.component';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './state/store/reducer';
import { OrderEffects } from './state/effects/order.effect';
import { CustomerEffects } from './state/effects/customer.effect';
import { ProductEffects } from './state/effects/products.effect';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    OrdersComponent,
    ProductsComponent,
    CustomersComponent,
    DetailsComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([OrderEffects, CustomerEffects, ProductEffects])
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
