import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  // selectingRecipe:Recipe;
  //inject the service
  // constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    // this.recipeService.selectedRecipe
    //  .subscribe( // subscribe: get informed by any changes
    //    (recipe:Recipe)=>
    // {
    //   this.selectingRecipe = recipe;
    // });
  }

  // onDisplayrecipe(recipe:Recipe)
  // {
  //   this.selectingRecipe=recipe;
  // }
  

}
