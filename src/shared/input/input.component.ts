import { NgModel } from '@angular/forms';
import { AfterContentInit, Component, ContentChild, Input, OnInit } from '@angular/core';


@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label: string;
  @Input() errorMessage: string;

  input: any;

  @ContentChild(NgModel) model: NgModel

  constructor() { }

  ngOnInit(){

  }

  ngAfterContentInit(){
    this.input = this.model
    console.log(this.input)
    if ( this.input === undefined ){
      throw new Error('Esse compoenent precisa ser usado com uma diretiva ngModel')
    }
  }

  hasSuccess(): boolean{
    return this.input.valid && ( this.input.dirty || this.input.touched )
  }

  hasError(): boolean{
    return !this.input.valid && ( this.input.dirty || this.input.touched )
  }

}
