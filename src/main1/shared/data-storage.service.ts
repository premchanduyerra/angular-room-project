import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http:HttpClient,private recipeService:RecipeService){}



  storeRecipies(){
    const recipes=this.recipeService.getRecipes();
    this.http.put("https://angular-backend-fc77b-default-rtdb.firebaseio.com/posts.json",recipes)
        .subscribe(response=>{
          console.log(response);

        })
  }
  fetchRecipes(){
    return this.http.get<Recipe[]>("https://angular-backend-fc77b-default-rtdb.firebaseio.com/posts.json")
        .pipe(map(recipes=>{
          console.log(recipes);

            return recipes.map(recipe=>{
              return {
                ...recipe    ,
                ingredients:recipe.ingredients?recipe.ingredients:[]
              };
            });
        }),
        tap(recipes=>{
          this.recipeService.setRecipes(recipes);

        })
    )
  }

}