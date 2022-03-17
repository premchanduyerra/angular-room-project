import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { DropdownDirective } from './dropdown.directive';
import { LodingSpinnerComponent } from './loding-spinner/loding-spinner.component';

@NgModule({
  declarations: [

    DropdownDirective,
    LodingSpinnerComponent,
    AlertComponent,

  ],
  imports: [ CommonModule ],
  exports: [
    DropdownDirective,
    LodingSpinnerComponent,
    AlertComponent,
    CommonModule
  ],
  providers: [],
})
export class SharedModule {}
