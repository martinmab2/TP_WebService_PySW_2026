import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Page1 as Page1Service } from "../../services/page1";
import { Page1modelo } from "../../models/page1modelo";
import { State } from '../../models/state';

@Component({
  selector: 'app-page1',
  imports: [FormsModule, CommonModule],
  templateUrl: './page1.html',
  styleUrl: './page1.css',
})
export class Page1 {
  paises: Page1modelo[]=[];
  paisSeleccionado!: Page1modelo;
  estados: State[]=[];
  estadoSeleccionado!: State;

  constructor(private page1Service: Page1Service) {
    this.cargarPaises();
  } 

  cargarPaises() {
     this.page1Service.getPaises().subscribe(  
      (result) => {
        this.paises = result.map((element: any) => {
          return Object.assign({
                name: element.name,
    isoCode: element.isoCode,   // 👈 asegurate de mapearlo
    latitude: element.latitude,
    longitude: element.longitude,
    flag: element.flag,
    currency: element.currency,
    phonecode: element.phonecode
          } as Page1modelo, element);
        });
      },
      (error) => {
        console.log(error);
      }
    );
}

cargarEstados(isoCode: string) {
  this.page1Service.getEstados(isoCode).subscribe(  
    (result) => {
      this.estados = result.map((element: any) => {
        return Object.assign({} as State, element);
      });
    },
    (error) => {
      console.log(error);
    }
  );
}
}
