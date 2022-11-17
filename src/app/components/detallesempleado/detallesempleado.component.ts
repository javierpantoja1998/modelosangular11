import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Params } from '@angular/router';
@Component({
  selector: 'app-detallesempleado',
  templateUrl: './detallesempleado.component.html',
  styleUrls: ['./detallesempleado.component.css']
})
export class DetallesempleadoComponent implements OnInit {

  public empleado !: Empleado;

  public id !: number;


  constructor
  ( private _service:EmpleadosService, private _activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params)=>{
      if(parametros['id']!=null){
        var id = parametros['id'];

        this._service.getDetallesEmpleado(id).subscribe(response => {
          this.empleado = response;
        });
      }
    });
  }

}
