import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleadosoficio',
  templateUrl: './empleadosoficio.component.html',
  styleUrls: ['./empleadosoficio.component.css']
})
export class EmpleadosoficioComponent implements OnInit {

  public oficios !: Array<string>;
  public empleados !: Array<Empleado>;

  @ViewChild("selectOficio") selectOficio !: ElementRef;

  constructor(private _service: EmpleadosService) { }

  ngOnInit(): void {
    this._service.getOficios().subscribe(response => {
      this.oficios = response;
    });
  }

  buscarEmpleados(): void {
    var oficio = this.selectOficio.nativeElement.value;

    this._service.getEmpleadosOficio(oficio).subscribe(response => {
      this.empleados = response;
    });
  }

}
