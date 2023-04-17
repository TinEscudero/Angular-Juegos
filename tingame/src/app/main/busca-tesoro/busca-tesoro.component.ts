import { Component, } from '@angular/core';

@Component({
  selector: 'app-busca-tesoro',
  templateUrl: './busca-tesoro.component.html',
  styleUrls: ['./busca-tesoro.component.scss']
})
export class BuscaTesoroComponent {
  filas: any;
  columnas: any;
  tabla: boolean;
  imagenSrc: string[][];
  filasArray: any[];
  columnasArray: any[];
  tesoro: any[];

  constructor(){
    this.filas;
    this.columnas;
    this.tabla = false;
    this.imagenSrc = [];
    this.filasArray = [];
    this.columnasArray = [];
    this.tesoro = [];
  }

  pintarTabla(event: any){
    this.filasArray = Array.from({length: this.filas});
    this.columnasArray = Array.from({length: this.columnas});
    this.tabla = true;
    this.imagenSrc = [];
    this.tesoro [0] = this.getRandom(this.filas);
    this.tesoro [1] = this.getRandom(this.columnas);


    for(let i=0; i<this.filas; i++) {
      this.imagenSrc[i] = [];
      for(let j=0; j<this.columnas; j++) {
        this.imagenSrc[i][j] = "./assets/x.png";
      }
    }
  }


  getRandom( num:number ) {
    return Math.floor(Math.random() * (num))
  }


  voltearImagen(fila: number, columna: number) {
    if (this.imagenSrc[fila][columna] === "./assets/skull.png") {
      this.imagenSrc[fila][columna] = "./assets/x.png";
    } else {
      this.imagenSrc[fila][columna] = "./assets/skull.png";
    } 

    if (this.tesoro[0] == fila && this.tesoro[1] == columna){
     this.imagenSrc[fila][columna] = "./assets/tesoro.png";
      setTimeout(() => {
         alert ("YA ESTAS FORRADO!!!");  }, 150);
    }
      
    }

  }
