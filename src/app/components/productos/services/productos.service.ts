import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  /*  baseUrl: string = 'https://api.escuelajs.co/api/v1/products'; */
   baseUrl: string = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

   mostrarProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl)

    }

}
