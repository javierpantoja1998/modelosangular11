import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "../global";
import { environment } from "src/environments/environment";

@Injectable()
export class PersonasService {
    //EN EL CONSTRUCTOR RECIBIMOS EL OBJETO 
    //HttpClient
    constructor(private _http: HttpClient) {}
        getPersonas(): Promise<any> {
            var request = "api/personas";
            var url = environment.urlApiPersonas + request;
            //TENEMOS DOS FORMAS DE TRABAJAR CON LOS SERVICIOS (promesas)
            //1) COMO EN VUE: CREAR UNA PROMESA AQUI Y CAPTURARLA DENTRO
            //DE LA PETICION
            let promise = new Promise((resolve) => {
                this._http.get(url).subscribe(response => {
                    resolve(response);
                });
            });
            return promise;
            //2) DEVOLVER DIRECTAMENTE LA PROMESA DE LA PETICION
            //PARA QUE LA RESUELVA EL COMPONENT
            //return this._http.get(url);
        }
}