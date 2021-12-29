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
 id!:number;
  constructor(private RecipeService:RecipeService, private shoppingListService:ShoppingListService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
   this.route.params.subscribe((parms:Params)=>{

    this.id=parms['id']
     this.recipeDetail=this.RecipeService.getRecipe(this.id)

   })
  }
  addToShoppingList(){
    this.shoppingListService.addIngredientArray(this.recipeDetail.ingredients)
  }

  deleteRecipe(){
    this.RecipeService.onDeleteRecipe(this.id)
    this.router.navigate(['../'],{relativeTo:this.route})
  }

}
