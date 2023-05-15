import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosService } from './services/productos.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{
  @Input()
  info: any;

  productos: any[] = [];

  constructor(private productoService: ProductosService) { }

  ngOnInit(): void {
    this.productoService.mostrarProductos().subscribe(response => {
      this.productos = response.slice(0, 8);
      console.log(response)
    });
  }

}

