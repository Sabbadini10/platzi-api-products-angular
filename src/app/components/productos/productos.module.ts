import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { ProductosRoutingModule } from './productos-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { ProductosComponent } from './productos.component';


@NgModule({
  declarations: [
    ProductosComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MatCardModule,
    HttpClientModule
  ],
  exports: [
    ProductosComponent
  ]
})
export class ProductosModule { }
