import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {


  pelicula:any; 
  regresarA:string = "";


  constructor(public _ps:PeliculasService,
    public route:ActivatedRoute) { 



this.route.params.subscribe(parametros => {

  this.regresarA = parametros['pag'];

  this._ps.getPelicula(parametros['id'])
  .subscribe(pelicula => {
    this.pelicula = pelicula
  })


})


    }

  ngOnInit() {
  }

}
