import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijodeporte',
  templateUrl: './hijodeporte.component.html',
  styleUrls: ['./hijodeporte.component.css']
})
export class HijodeporteComponent implements OnInit {

  @Input() sport !: string;
  //VAMOS A RECIBIR UN METODO DEL PADRE
  //MEDIANTE props
  @Output() seleccionarDeporte: EventEmitter<any> = new EventEmitter();

  seleccionarFavoritoHijo(): void {
    //CUANO REALICEMOS click EB EL HIJO, 
    //LLAMAMOS AL PADRE
    this.seleccionarDeporte.emit(this.sport);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
