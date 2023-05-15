import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  baseUrl: string = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

   mostrarOfertas(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl)

    }

}
