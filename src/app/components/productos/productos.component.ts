import { Component, OnInit } from '@angular/core';
import { ProductosService } from './services/productos.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{
  productos: any[] = [];

  constructor(private productoService: ProductosService) { }

  ngOnInit(): void {
    this.productoService.mostrarProductos().subscribe(response => {
      this.productos = response.slice(0, 8);
      console.log(response)
    });
  }

}

