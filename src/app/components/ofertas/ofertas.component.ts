import { Component, OnInit } from '@angular/core';
import { OfertasService } from './services/ofertas.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit{

  ofertas: any[] = [];

  constructor(private ofertaservice: OfertasService) { }

  ngOnInit(): void {
    this.ofertaservice.mostrarOfertas().subscribe(response => {
      this.ofertas = response.slice(8, 16);
      console.log(response)
    });
  }

}
