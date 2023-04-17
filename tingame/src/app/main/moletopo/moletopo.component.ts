import { Component } from '@angular/core';

@Component({
  selector: 'app-moletopo',
  templateUrl: './moletopo.component.html',
  styleUrls: ['./moletopo.component.scss']
})
export class MoletopoComponent {
  diglet: boolean = false;
  timer: any;
  contador: number = 30;
  fils: number[] = [1, 1, 1,];
  columns: number[] = [1, 1, 1];
  imgDiglet: string = '../../../assets/2.png';
  imgBg: string = '../../../assets/tie.png';
  object: any[] = [];
  imageSrc: string[][] =[];
  puntos: number = 0;
 
  constructor(){}

 ngOnInit(): void {

this.default();
 }
 
  starting() {  
    this.contador = 30;
    this.puntos = 0;
    this.timer = setInterval(() => {
      let contadorP = 2;
      
      let prueba = setInterval(() => {
        this.default();
        contadorP  --;
        
        this.object[0] = this.getRandom(3);
        this.object[1] = this.getRandom(3);
        this.imageSrc[this.object[0]][this.object[1]] = this.imgDiglet;
        
        if(contadorP<=0) {
          clearInterval(prueba)
        }
      },500)
      
      if (this.contador <= 1) {
        clearInterval(this.timer);
        
        
      }
      this.contador--;
    },1000);
  }

  sumar(f: number, c: number){
    if(this.imageSrc[f][c] === this.imgDiglet){
      this.imageSrc[f][c] = this.imgBg;
      this.puntos++;
    }
  }

  default() {
    for (let i = 0; i<this.fils.length; i++) {
      this.imageSrc[i] =[];
      for (let j = 0; j < this.columns.length; j++) {
        this.imageSrc[i][j] = this.imgBg
      }
  }
  }

  getRandom(num: number) {
   return Math.floor(Math.random()*num)
  }
}



//   timer: any;
//   mole:boolean = false
//   contador:number = 30;
//  tablero:any = [];
//   urltierra: string = "../../../assets/tie.png";
//   urltopo: string  = "../../../assets/2.png";
//   topo :any [] = [0,0];
//   saletopo:any;
//   puntos:number = 0;

//   imagenpuntos:string[][]=[];


// empezar(){
//   this.puntos=0;

//  for(let i=0; i < 3; i++) {
//     this.tablero [i] = [];
//     for(let j =0; j< 3; j++) {
//       this.tablero[i][j] = "../../../assets/tie.png";
//     }
//   }
  
//   this.timer = setInterval(()=>{
//     this.contador--;
//    let prueba = setInterval(()=>{
     
//       this.tablero [this.topo[0]][this.topo[1]] = "../../../assets/tie.png";

//       this.topo[0] = this.getRandom(3);
//       this.topo[1] = this.getRandom(3);

//       this.tablero [this.topo[0]][this.topo[1]] = "../../../assets/2.png";
      
//       if(this.contador<=0){
//         clearInterval(prueba);


//       }
//     },500)

//     if(this.contador <= 0){
//       clearInterval(this.timer)
//     }
//   },1000);

//   }

//   sumar(Y:number, x :number){
//     if(this.[x][y]===this.topo=)
//   }

// getRandom(num: number){
//   return Math.floor(Math.random() * (num))

// }
// }



