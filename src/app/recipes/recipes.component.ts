import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[]
})
export class RecipesComponent implements OnInit {

  recipeDetailClicked!:Recipe;


  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipeService.onselectedRecipe.subscribe((recipe:Recipe)=>{
      this.recipeDetailClicked=recipe
      console.log("sub");
      
    })
  }


}
