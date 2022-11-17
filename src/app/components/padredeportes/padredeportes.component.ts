import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padredeportes',
  templateUrl: './padredeportes.component.html',
  styleUrls: ['./padredeportes.component.css']
})
export class PadredeportesComponent implements OnInit {
  public deportes: Array<string>;
  public mensaje !: string;

  constructor() {
    this.deportes = ["Futbol", "Tenis", "Baloncesto", "Padel", "Natacion"];
  }

  //CUANDO HAGAMOS EMIT, LEERA ESTE METODO
  seleccionarDeportePadre(event: string): void {
    console.log(event);
    this.mensaje = "El deporte seleccionado es: " + event + "!!";
  }

  ngOnInit(): void {
  }

}
