import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  selectingRecipe:Recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe((recipe:Recipe)=>
    {
      this.selectingRecipe = recipe;
    })
  }

  // onDisplayrecipe(recipe:Recipe)
  // {
  //   this.selectingRecipe=recipe;
  // }
  

}
