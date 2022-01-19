import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShoppingRoutingModule } from './shopping-routing.module';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [ CommonModule,RouterModule,FormsModule ,ShoppingRoutingModule ],
  exports: [
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  providers: [],
})
export class ShoppingModule {}
