import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PlantillasService {
    constructor(private _http: HttpClient) {}

    getFunciones(): Observable<any> {
        var request = "/api/Plantilla/Funciones";
        var url = environment.urlApiPlantillas + request;

        return this._http.get(url);
    }

    getPlantillaFuncion(funcion: string): Observable<any> {
        var request = "/api/Plantilla/PlantillaFuncion/"+funcion;
        var url = environment.urlApiPlantillas + request;

        return this._http.get(url);
    }

    getPlantillaFuncionMultiple(funciones: Array<string>):Observable<any> 
    {

        var data = "";

        for (var funcion of funciones) {
            data += "funcion=" + funcion + "&";
        }

        data = data.substring(0, data.length - 1);

        var request = "/api/Plantilla/PlantillaFunciones?"+data;
        var url = environment.urlApiPlantillas + request;

        return this._http.get(url);
    }
}