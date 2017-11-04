import { MenuItem } from './menu-item.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  animations:[
    trigger('menu-item-appeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateX(-20px)'}),
        animate('500ms 0s ease-in')
      ])
    ])
  ]

})
export class MenuItemComponent implements OnInit {

  menuItemState = 'ready'

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
