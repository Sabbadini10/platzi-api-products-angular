import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProductosModule } from '../productos/productos.module';
import { OfertasModule } from '../ofertas/ofertas.module';
import { MetodosPagosModule } from '../metodos-pagos/metodos-pagos.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProductosModule,
    OfertasModule,
    MetodosPagosModule
  ],
  exports: [
    ProductosModule,
    OfertasModule,
    MetodosPagosModule
  ]
})
export class HomeModule { }
