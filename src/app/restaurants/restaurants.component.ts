import { Observable } from 'rxjs/Rx';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './restaurant/restaurant.model';
import { Component, OnInit } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';
import 'rxjs/add/operator/switchmap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/from';


@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  searchBarState = "hidden"

  restaurants: Restaurant[]

  searchForm: FormGroup
  searchControl: FormControl

  constructor(private restarauntService: RestaurantsService,
              private fb: FormBuilder) { }

  // chamado uma vez no ciclo: sempre que o component entrar na tela esse metodo é acionado
  ngOnInit() {

     this.searchControl = this.fb.control('')

     this.searchForm = this.fb.group({
       searchControl: this.searchControl
     })

     this.searchControl.valueChanges
         .debounceTime(500) // espera 500ms entre dois eventos
         .distinctUntilChanged() //emite somente eventos unicos (se emitirem dois eventos iguais ele ignora um)
         .do( searchTerm =>  console.log(searchTerm) )
         .switchMap( searchTerm =>
            this.restarauntService
              .restaurants(searchTerm)
              .catch( erro => Observable.from([])))
         .subscribe( restaurant => this.restaurants = restaurant )


    this.restarauntService.restaurants()
      .subscribe( restaurants => this.restaurants = restaurants);
  }

  toggleSearch(){
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }

}
