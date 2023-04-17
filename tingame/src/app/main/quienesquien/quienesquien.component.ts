import { Component, OnInit } from '@angular/core';
import { DivisasService } from '../servicios/divisas.service';

@Component({
  selector: 'app-quienesquien',
  templateUrl: './quienesquien.component.html',
  styleUrls: ['./quienesquien.component.scss']
})
export class QuienesquienComponent implements OnInit {
  divisa: any = [];
  change: any= 0;
  seleccion = 'EUR';
  



  constructor(private servicio: DivisasService) { }

  ngOnInit() {
    this.servicio.getmonedas().subscribe((res: any) => {
      for (const key in res.rates) {
        this.divisa.push({
          name: key,
          value: res.rates[key]
        })


      } 
    }

    )
  }
changeMoneda(event:any){
  const base = (event.target as HTMLSelectElement).value
  this.servicio.getbase(base).subscribe((res: any) => {
   this.divisa=[];
    for (const key in res.rates) {
      this.divisa.push({
        name: key,
        value: res.rates[key]
      })

    } 
  }

  )
  

}


};


