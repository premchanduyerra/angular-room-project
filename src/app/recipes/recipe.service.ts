import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model"

@Injectable()
export class RecipeService{
constructor(private shoppingListService:ShoppingListService){}

   private recipes:Recipe[]= [
        new Recipe(
            "recipe1",
            "egg curry",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGTbUW1eFyFSP_m45F_wXjLSQfr1RE-IvSOg&usqp=CAU",
            [
                new Ingredient('abc',1),
                new Ingredient('bcd',2),
                new Ingredient('hsdahbsadh',33)
            ]
            ),
        new Recipe(
            "recipe2",
            "recipe desc",
            "https://www.recipetineats.com/wp-content/uploads/2019/04/Broccoli-Pasta_5.jpg?w=747&h=747&crop=1",
            [
                new Ingredient('yyy',1),
                new Ingredient('ddd',2)
            ]
            ),
        new Recipe(
            "recipe4",
            "samosaa",
            "https://static.toiimg.com/thumb/61050397.cms?imgsize=246859&width=800&height=800",
            [
                new Ingredient('abc',1),
                new Ingredient('bcd',2)
            ]
        ),
        ];
    public getRecipes(){
        return this.recipes.slice()
    }

    public getRecipe(index:number){
        return this.recipes.slice()[index]
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){


        this.shoppingListService.addIngredientArray(ingredients)
    }

    onselectedRecipe=new EventEmitter<Recipe>();
}
