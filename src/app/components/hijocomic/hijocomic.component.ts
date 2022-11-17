import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Comic } from 'src/app/models/comic';

@Component({
  selector: 'app-hijocomic',
  templateUrl: './hijocomic.component.html',
  styleUrls: ['./hijocomic.component.css']
})
export class HijocomicComponent implements OnInit {

  @Input() comicHijo !: Comic;
  @Input() index !: number;

  @Output() seleccionarComic: EventEmitter<any> = new EventEmitter();
  @Output() eliminarComic: EventEmitter<any> = new EventEmitter();
  @Output() modificarComic: EventEmitter<any> = new EventEmitter();


  seleccionarFavoritoHijo(): void {
    this.seleccionarComic.emit(this.comicHijo);
  }

  eliminarComicHijo(): void {
    this.eliminarComic.emit(this.index);
  }

  modificarComicHijo(): void {
    this.modificarComic.emit(this.index);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
