import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  emitiuMensagem: boolean = false

  @Output() rated = new EventEmitter<number>()

  rates: number[] = [1,2,3,4,5,6,7] //numeros de estrelas
  rate: number = 0

  previousRate: number //valor previo quando entro com o mouse em cima da estrela

  constructor() { console.log(this.rated) }

  ngOnInit() {
  }

  setRate(r: number){
    this.rate = r
    this.previousRate = undefined
    this.rated.emit(this.rate)
    console.log(this.rated)
    console.log(r)
  }

  setTemporaryRate(r: number){
    if (this.previousRate === undefined){
      this.previousRate = this.rate
    }

    this.rate = r
  }

  clearTemporaryRate(){
    if (this.previousRate !== undefined){
      this.rate = this.previousRate
      this.previousRate = undefined
    }
  }

}
