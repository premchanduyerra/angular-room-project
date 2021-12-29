import { RecipeService } from './../recipe.service';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id!:number;
  editMode:boolean=false
  recipieForm:FormGroup=new FormGroup({});
  constructor(private route:ActivatedRoute,private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe((parms:Params)=>{
     this.id=+parms['id']
      this.editMode=parms['id']!=null
      this.initForm()
    })




  }

  getIngredientsControl(){
    return (<FormArray>this.recipieForm.controls['ingredients']).controls
  }

  onSubmitForm(){
    console.log(this.recipieForm);

  }


  private initForm(){

    let recipeName="";
    let recipeImagePath="";
    let recipeDescription="";
    let recipeIngredients=new FormArray([]);

    if(this.editMode){
      let recipe=this.recipeService.getRecipe(this.id);
      recipeName=recipe.name;
      recipeImagePath=recipe.imagePath;
      recipeDescription=recipe.description;

      if(recipe['ingredients']){
        for( let ingredient of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name':new FormControl(ingredient.name),
              'amount':new FormControl(ingredient.amount)
            })
          )
        }
      }
    }

    this.recipieForm=new FormGroup({
      'name':new FormControl(recipeName),
      'imagePath':new FormControl(recipeImagePath),
      'description':new FormControl(recipeDescription),
      'ingredients':recipeIngredients
    })

  }


}
