import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessor } from '@angular/forms/src/directives';
import { RadioOption } from './radio-option.model';
import { Component, forwardRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( () => RadioComponent ),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[]

  value: any
  OnChange: any

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any){
    this.value = value
    this.OnChange(this.value)
  }

  /**
   * Método utilizando quando alguma diretiva quer passar algum valor para o componente
   */
  writeValue(obj: any): void{
    this.value = obj
  }
  /**
   * Método que passa uma função sempre que o valor interno do component mudar
   */
  registerOnChange(fn: any): void{
    this.OnChange = fn
  }
  /**
   * Registra quando o usuário entrou no componenet
   */
  registerOnTouched(fn: any): void{
      // console.log('usuário entrou no componenet');
  }
  /**
   * This function is called when the control status changes to or from "DISABLED".
   * Depending on the value, it will enable or disable the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState?(isDisabled: boolean): void{
    //console.log(isDisabled)
  }

}
