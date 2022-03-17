import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit ,OnDestroy{
//  @Output() addIngredientEvent=new EventEmitter<Ingredient>()


  //  @Output() addIngredientEvent=new EventEmitter<Ingredient>()
  @ViewChild('form') slform!: NgForm;
  subscription!: Subscription;
  editMode=false;
  editedItemIndex!:number;
  editedItem!:Ingredient;
  constructor(private shoppingListService:ShoppingListService) { }


  ngOnInit(): void {

    this.subscription=this.shoppingListService.startedEditing
    .subscribe((index:number)=>{
        this.editMode=true;
        this.editedItemIndex=index
        this.editedItem=this.shoppingListService.getIngredient(index);

        this.slform.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        })

    })


  }
  addIngredient(form:NgForm){


    const tempIngredient=new Ingredient(form.value.name,form.value.amount)

    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editedItemIndex,tempIngredient)
    }
    else{
      this.shoppingListService.addIngredient(tempIngredient)
    }

    this.editMode=false;
    this.slform.reset();


  }
  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear()
  }

  onClear(){
    this.editMode=false;
    this.slform.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
