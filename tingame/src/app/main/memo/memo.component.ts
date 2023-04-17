import { Component } from '@angular/core';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.scss']
})
export class MemoComponent {
 
  planetsNormal:any [] = [

    {
    
    id: 1,
    
    name: 'earth',
    
    img: 'assets/earth.svg',

    cartaseleccionada: false,
  cartaconfirmada:false,
    
    },{
    
     id: 2,
    
     name: 'jupiter',
    
    img: 'assets/jupiter.svg',
    cartaseleccionada: false,
  cartaconfirmada:false,
    
    
    },{
    
     id: 3,
    
     name: 'mars',
    
     img: 'assets/mars.svg',
     cartaseleccionada: false,
  cartaconfirmada:false,
    
     },{
      id: 4,
      name: "mercury",
      img: "/assets/mercury.svg",
      cartaseleccionada: false,
  cartaconfirmada:false,
    
    },{
      id: 5,
      name: "saturn",
      img: "/assets/saturn.svg",
      cartaseleccionada: false,
  cartaconfirmada:false,
    
    },{
      id: 6,
      name: "uranus",
      img: "/assets//uranus.svg",
      cartaseleccionada: false,
  cartaconfirmada:false,
    
    },{
    
     id: 7,
    
    name: 'earth',
    
    img: 'assets/earth.svg',
    cartaseleccionada: false,
  cartaconfirmada:false,
    
    
    },{
    
   id: 8,
    
  name: 'jupiter',
    
    img: 'assets/jupiter.svg',
    cartaseleccionada: false,
  cartaconfirmada:false,
    
    
  },{
    
   id: 9,
    
  name: 'mars',
    
    img: 'assets/mars.svg',
    cartaseleccionada: false,
  cartaconfirmada:false,
    
    
  },{
      id: 10,
      name: "mercury",
      img: "/assets/mercury.svg",
      cartaseleccionada: false,
  cartaconfirmada:false,
    
    },
    {
      id: 11,
      name: "saturn",
      img: "/assets/saturn.svg",
      cartaseleccionada: false,
  cartaconfirmada:false,
    
    },
    {
      id: 12,
      name: "uranus",
      img: "/assets//uranus.svg",
      cartaseleccionada: false,
  cartaconfirmada:false,
    
    }
    
  ];
    
}

