import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService{

    onChangeIngredient = new EventEmitter<Ingredient[]>();

   private ingredients:Ingredient[]=[
        new Ingredient("apples",5),new Ingredient("tomotos",15),
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient)
        console.log(this.ingredients);
        this.onChangeIngredient.emit(this.ingredients)
        
    }
    addIngredientArray(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients)
        this.onChangeIngredient.emit(this.ingredients)

    }
}