import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { InputComponent } from './input/input.component';
import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({
  declarations:[InputComponent, RadioComponent, RatingComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports:[InputComponent, RadioComponent,
           RatingComponent, CommonModule,
           FormsModule, ReactiveFormsModule]

})
export class SharedModule{
  static forRoot(): ModuleWithProviders{
    return {
      ngModule: SharedModule,
      providers: []
    }
  }
}
