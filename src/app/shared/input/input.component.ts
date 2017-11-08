import { NgModel, FormControlName } from '@angular/forms';
import { AfterContentInit, Component, ContentChild, Input, OnInit } from '@angular/core';


@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label: string;
  @Input() errorMessage: string;
  @Input() showTip: boolean = true

  input: any;

  @ContentChild(NgModel) model: NgModel
  @ContentChild (FormControlName) control: FormControlName

  constructor() { }

  ngOnInit(){}

  ngAfterContentInit(){
    this.input = this.model || this.control //se ngmodel n tiver disponivel vai tentar o control
    console.log(this.input)
    if ( this.input === undefined ){
      throw new Error('Esse compoenent precisa ser usado com uma diretiva ngModel ou FormControlName')
    }
  }

  hasSuccess(): boolean{
    return this.input.valid && ( this.input.dirty || this.input.touched )
  }

  hasError(): boolean{
    return !this.input.valid && ( this.input.dirty || this.input.touched )
  }

}
