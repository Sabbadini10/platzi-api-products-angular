import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProductosModule } from '../productos/productos.module';
import { OfertasModule } from '../ofertas/ofertas.module';
import { MetodosPagosModule } from '../metodos-pagos/metodos-pagos.module';
import { SliderModule } from '../slider/slider.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProductosModule,
    OfertasModule,
    MetodosPagosModule,
    SliderModule
  ],
  exports: [
    ProductosModule,
    OfertasModule,
    MetodosPagosModule,
    SliderModule
  ]
})
export class HomeModule { }
