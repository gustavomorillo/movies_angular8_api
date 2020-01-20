import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  imagen:any
  constructor(public peliculasService: PeliculasService) { }

  ngOnInit() {
  }


  getPeliculas(){
    this.peliculasService.getPopulares().subscribe(resp => {

      this.imagen = resp['results'][0].poster_path;
      console.log(resp);
      console.log('actualizo');
    })

  }

}
