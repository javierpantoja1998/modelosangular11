import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class EmpleadosService {
    constructor(private _http: HttpClient) {}

    getEmpleados(): Observable<any> {
        var request = "api/Empleados";
        var url = environment.urlApiEmpleados + request;

        return this._http.get(url);
    }

    findEmpleadosSalario(salario: string): Observable<any> {
        var request = "api/Empleados/EmpleadosSalario/"+salario;
        var url = environment.urlApiEmpleados + request;

        return this._http.get(url);
    }

    getOficios(): Observable<any> {
        var request = "api/Empleados/Oficios/";
        var url = environment.urlApiEmpleados + request;

        return this._http.get(url);
    }

    getEmpleadosOficio(oficio: string): Observable<any> {
        var request = "api/Empleados/EmpleadosOficio/"+oficio;
        var url = environment.urlApiEmpleados + request;

        return this._http.get(url);
    }

    getDetallesEmpleado(id:string): Observable<any>{
      var request = "api/Empleados/"+id;
      var url = environment.urlApiEmpleados + request;

      return this._http.get(url);
    }
}
