import { MenuItem } from './menu-item.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem; //PROPRIEDADE QUE SERÁ PASSADA PARA SER CUSTOMIZADA NO ITEM QUE ESSE ARQUIVO REPRESENTA
  @Output() add = new EventEmitter(); //METODO DO MENU ITEM QUE IRÁ EMITIR O OBJETO QUE FOI CLICADO!

  constructor() { }

  ngOnInit() {
  }

  // O COMPONENT FILHO VAI MANDAR PARA O PAI O OBJETO QUE FOI CLICADO
  emitAddEvent(){
    this.add.emit(this.menuItem);
  }

}
