import { NgModule } from '@angular/core';
import { InputComponent } from './input/input.component';
import { InputRefDirective } from './directives/input-ref.directive';



@NgModule({
  declarations: [
    InputComponent,
    InputRefDirective
  ],
  imports: [
  ],
  exports: [
    InputComponent
  ]
})
export class InputModule { }
