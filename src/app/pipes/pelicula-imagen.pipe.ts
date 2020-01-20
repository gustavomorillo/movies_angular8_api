import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {



  transform(pelicula: any, poster:boolean = false): any {

    let url = "http://image.tmdb.org/t/p/w500"

    if(poster) {

      if(pelicula.poster_path) {
        return url + pelicula.poster_path;
      } else {
        return "assets/no-image.jpg"
      }

      

    }

    if(pelicula.backdrop_path) {
      return url + pelicula.backdrop_path;
      } else {
      
      if(pelicula.poster_path){
      return url + pelicula.poster_path;
      } else {
      return "assets/no-image.jpg"
      }
      }
      return null
      
  }

}
