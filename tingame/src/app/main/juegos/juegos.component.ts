import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.scss']
})
export class JuegosComponent {
  @Input() memo: any 
  planetselecionados:any [] = [];
  contadorplanetas= 0;
  // planetsRandom: any [] = this.planetsNormal.sort(()=> 0.5 - Math.random())
  
  onclick(planeta:any){
    
    
    planeta.cartaseleccionada = true;
    this.planetselecionados.push ( planeta )
    
    if (this.planetselecionados.length > 1){
      if (this.planetselecionados[0].name===this.planetselecionados[1].name){
        this.planetselecionados[0].cartaconfirmada=true;
        this.planetselecionados[1].cartaconfirmada=true;
        this.planetselecionados[0].cartaseleccionada=false;
        this.planetselecionados[1].cartaseleccionada=false;
      }
      setTimeout(() => {
        this.planetselecionados[0].cartaseleccionada=false;
        this.planetselecionados[1].cartaseleccionada=false;
        this.planetselecionados.splice(0 , 2)
        
      }, 500);
    }

  }

 

}

