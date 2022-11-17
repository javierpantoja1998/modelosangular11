import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-personasapi',
  templateUrl: './personasapi.component.html',
  styleUrls: ['./personasapi.component.css']
})
export class PersonasapiComponent implements OnInit {
  public personas !: Array<Persona>

  constructor(private _service: PersonasService) { }

  ngOnInit(): void {
    // SEGUNDA OPCION
    // this._service.getPersonas().subscribe(response => {
    //   this.personas = response;
    // });

    // PRIMERA OPCION
    this._service.getPersonas().then(response => {
      this.personas = response;
    });
  }

}
