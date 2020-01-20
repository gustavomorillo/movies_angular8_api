import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  buscar:string = "";

  constructor(public _ps:PeliculasService,
              public route:ActivatedRoute) { 

        this.route.params.subscribe(parametros => {
          console.log(parametros.texto);
          
          if(parametros.texto){
            this.buscar = parametros.texto;
            this.buscarPelicula();
          }


        })


              }

  ngOnInit() {
  }

  requests;

  buscarPelicula() {
    if(this.buscar.length == 0){
      return
    }
    this._ps.buscarPelicula(this.buscar).subscribe(res => this.requests = res)

  }

}
