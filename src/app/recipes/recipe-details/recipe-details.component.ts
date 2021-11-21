import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

 @Input() recipeDetail!:Recipe;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
  }
  addToShoppingList(){
    this.shoppingListService.addIngredient(this.recipeDetail.ingredients[0])
  }
}
