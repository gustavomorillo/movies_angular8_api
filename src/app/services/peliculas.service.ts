import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(public jsonp:HttpClientJsonpModule,
              public http: HttpClient) { }

  private apikey:string = "42940aecdff6d13266d5f7abc4b99a23";
  private urlMoviedb:string = "https://api.themoviedb.org/3";


  peliculas:any;
  results:any;
    

  getCartelera() {

    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);


    let desdeStr = `${desde.getFullYear()}-0${desde.getMonth()+1}-${desde.getDate()}`
    let hastaStr = `${hasta.getFullYear()}-0${hasta.getMonth()+1}-${hasta.getDate()}`

    console.log(desdeStr);
    console.log(hastaStr);

    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${ this.apikey }`;
                             
    return this.http.jsonp( url, 'callback' )
  }
  

  getPopulares(){

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }`;
    
    return this.http.jsonp( url, 'callback' )
                // .map( res=> res.json());
  }
  

  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }`;

    return this.peliculas = this.http.jsonp( url, 'callback' ).pipe(map(data => { return data['results']; console.log(data['results']) }))

     
                // .map( res=> res.json());
  }

  getNinos() {
    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }`
    
    return this.http.jsonp( url, 'callback' )
  
  }

  getPelicula(id:string){

    let url = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apikey }`;
    
    return this.http.jsonp( url, 'callback' )
                // .map( res=> res.json());
  }

}

