import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurdService } from '../auth/auth.gaurd';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesResolverService } from './recipes-resolver.service';
import { RecipesComponent } from './recipes.component';
import { SelectRecipeComponent } from './select-recipe/select-recipe.component';

const routes:Routes=[
              {
                path:"recipes",component:RecipesComponent,
                canActivate:[AuthGaurdService],
                children:[
                  {path:'',component:SelectRecipeComponent},

                  {path:'new',component:RecipeEditComponent},

                  {path:':id',component:RecipeDetailsComponent,resolve:[RecipesResolverService]},
                  {path:':id/edit',component:RecipeEditComponent,resolve:[RecipesResolverService]},
              ]},
          ]

@NgModule({
  declarations: [],
  imports: [ CommonModule ,RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class RecipesRoutingModule {}
