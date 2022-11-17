import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';
import { Comic } from 'src/app/models/comic';
import { ComicsService } from 'src/app/services/comics.service';

@Component({
  selector: 'app-padrecomics',
  templateUrl: './padrecomics.component.html',
  styleUrls: ['./padrecomics.component.css']
})
export class PadrecomicsComponent implements OnInit {

  public comics!: Array<Comic>;
  public mensaje !: string;

  @ViewChild("cajanombre") cajanombre !: ElementRef;
  @ViewChild("cajaimagen") cajaimagen !: ElementRef;
  @ViewChild("cajadescripcion") cajadescripcion !: ElementRef;

  constructor(private _service: ComicsService) {}

  seleccionarComicPadre(event: Comic): void {
    this.mensaje = "El comics favorito es: " + event.nombre + "!!";
  }

  insertarComicPadre(): void {
      var nombre = this.cajanombre.nativeElement.value;
      var imagen = this.cajaimagen.nativeElement.value;
      var descripcion = this.cajadescripcion.nativeElement.value;

    this.comics.push(new Comic(nombre, imagen, descripcion));
  }

  eliminarComicPadre(event: number): void {
    this.comics.splice(event, 1);
  }

  modificarComicPadre(event: number): void {
    this.comics[event].nombre = this.cajanombre.nativeElement.value;
    this.comics[event].imagen = this.cajaimagen.nativeElement.value;
    this.comics[event].descripcion = this.cajadescripcion.nativeElement.value;
  }

  ngOnInit(): void {
    this.comics = this._service.getComics();
  }

}
