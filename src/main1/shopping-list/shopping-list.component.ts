import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers:[]
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[]=[];
  constructor(private shoppingListService:ShoppingListService) {


  }

  ngOnInit(): void {
    this.ingredients=this.shoppingListService.getIngredients();
    this.shoppingListService.onChangeIngredient.subscribe((ingredients:Ingredient[])=>{
      this.ingredients=ingredients
    })
  }



  onEditItem(index:number){
      this.shoppingListService.startedEditing.next(index);
  }



}
