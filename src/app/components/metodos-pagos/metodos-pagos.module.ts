import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetodosPagosRoutingModule } from './metodos-pagos-routing.module';
import { MetodosPagosComponent } from './metodos-pagos.component';


@NgModule({
  declarations: [
MetodosPagosComponent
  ],
  imports: [
    CommonModule,
    MetodosPagosRoutingModule
  ],
  exports:[
    MetodosPagosComponent
  ]
})
export class MetodosPagosModule { }
