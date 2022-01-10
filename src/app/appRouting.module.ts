import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { RecipeDetailsComponent } from "./recipes/recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipesResolverService } from "./recipes/recipes-resolver.service";
import { RecipesComponent } from "./recipes/recipes.component";
import { SelectRecipeComponent } from "./recipes/select-recipe/select-recipe.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const routes:Routes=[
    {path:"",redirectTo:'/recipes',pathMatch:"full"},
    {path:"recipes",component:RecipesComponent,children:[
        {path:'',component:SelectRecipeComponent},

        {path:'new',component:RecipeEditComponent},

        {path:':id',component:RecipeDetailsComponent,resolve:[RecipesResolverService]},
        {path:':id/edit',component:RecipeEditComponent,resolve:[RecipesResolverService]},
    ]},
    {path:"shopping-list",component:ShoppingListComponent}
]



@NgModule({
    imports:[
        RouterModule.forRoot(routes,{useHash:true})
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{

}