import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'


import { APP_ROUTING } from "./app.routes"

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { GaleriaComponent } from './components/home/galeria.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavbarComponent,
    PeliculaComponent,
    HomeComponent,
    BuscarComponent,
    PeliculaImagenPipe,
    GaleriaComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
