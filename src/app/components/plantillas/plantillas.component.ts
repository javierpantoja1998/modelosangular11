import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Plantilla } from 'src/app/models/plantilla';
import { PlantillasService } from 'src/app/services/plantillas.service';

@Component({
  selector: 'app-plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.css']
})
export class PlantillasComponent implements OnInit {

  public funciones !: Array<string>
  public plantillas !: Array<Plantilla>;

  @ViewChild("cajafunciones") cajafunciones !: ElementRef;

  constructor(private _service: PlantillasService) { }

  ngOnInit(): void {
    this._service.getFunciones().subscribe(response => {
      this.funciones = response;
    });
  }

  buscarEmpleados(): void {

    var seleccionados = new Array<string>();

    var valorOpcion = this.cajafunciones.nativeElement.options;

    for(var option of valorOpcion){
      if(option.selected == true){
        seleccionados.push(option.value);
      }
    }

    this._service.getPlantillaFuncionMultiple(seleccionados).subscribe(response => {
      this.plantillas = response;
    });

  }

}
