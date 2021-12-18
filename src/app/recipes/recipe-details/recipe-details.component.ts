import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

 recipeDetail!:Recipe;

  constructor(private RecipeService:RecipeService, private shoppingListService:ShoppingListService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
   this.route.params.subscribe((parms:Params)=>{
    
    const id=parms['id']
     this.recipeDetail=this.RecipeService.getRecipe(id)
     
   })
  }
  addToShoppingList(){
    this.shoppingListService.addIngredientArray(this.recipeDetail.ingredients)
  }
}
