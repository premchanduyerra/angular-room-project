import { Recipe } from './../recipe.model';
import { RecipeService } from './../recipe.service';
import { FormGroup, FormControl, FormArray, Validators, Form } from '@angular/forms';
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
  constructor(private route:ActivatedRoute,private router:Router,private recipeService:RecipeService) { }

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

    if(this.editMode){
      this.recipeService.updateRecipe(this.id,this.recipieForm.value);
    }else{
      this.recipeService.addRecipe(this.recipieForm.value)
      this.recipieForm.reset()
    }
    this.onCancelForm()
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
              'name':new FormControl(ingredient.name,Validators.required),
              'amount':new FormControl(ingredient.amount,[
                Validators.required,
                Validators.pattern(/^[1-9][0-9]*$/)
              ])
            })
          )
        }
      }
    }

    this.recipieForm=new FormGroup({
      'name':new FormControl(recipeName,Validators.required),
      'imagePath':new FormControl(recipeImagePath,Validators.required),
      'description':new FormControl(recipeDescription,Validators.required),
      'ingredients':recipeIngredients
    })

  }


  onAddIngredient(){
    (<FormArray>this.recipieForm.get('ingredients')).push(
      new FormGroup({
        'name':new FormControl(null,Validators.required),
        'amount':new FormControl(null,[
          Validators.required,
          Validators.pattern(/^[1-9][0-9]*$/)
        ])
      })
    )
  }
  onDeleteIngredient(index:number){
    (<FormArray>this.recipieForm.get('ingredients')).removeAt(index)
  }

  onCancelForm(){
this.router.navigate(['../'],{relativeTo:this.route})
  }


}
