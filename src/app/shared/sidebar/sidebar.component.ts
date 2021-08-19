import { Component } from '@angular/core';

import { GifsService } from '../../gifs/services/gifs.service';
import { BusquedaComponent } from '../../gifs/busqueda/busqueda.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  get historial(): string[] {
    return this.gifsService.historial;
  }

  constructor(private gifsService: GifsService) {

  }

  buscar(termino: string) {
    // console.log(termino);
    this.gifsService.buscarGifs(termino);

  }



}
