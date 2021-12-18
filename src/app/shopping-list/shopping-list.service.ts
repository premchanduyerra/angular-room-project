import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService{

    onChangeIngredient = new EventEmitter<Ingredient[]>();
    startedEditing = new Subject<number>();

   private ingredients:Ingredient[]=[
        new Ingredient("apples",5),
        new Ingredient("tomotos",15),
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(index:number){
        return this.ingredients[index];
    }

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient)
        // console.log(this.ingredients);
        this.onChangeIngredient.emit(this.ingredients)

    }
    addIngredientArray(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients)
        this.onChangeIngredient.emit(this.ingredients)

    }

    updateIngredient(index:number,ingredient:Ingredient){

      this.ingredients[index]= ingredient;
      this.onChangeIngredient.emit(this.ingredients)

    }

    deleteIngredient(index:number){
      this.ingredients.splice(index,1)
      this.onChangeIngredient.emit(this.ingredients)
    }

}
