import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @Output() addIngredientEvent=new EventEmitter<Ingredient>()
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
  }
  addIngredient(nameField:HTMLInputElement,amountField:HTMLInputElement){
    console.log(nameField.value);
    console.log(amountField.value);

    const tempIngredient=new Ingredient(nameField.value,parseInt(amountField.value))
    this.shoppingListService.addIngredient(tempIngredient)
  
  }
}
