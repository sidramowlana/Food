import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeSelected:Recipe;
  //When using directly with ShoppingListService
  // constructor(private shoppingListService:ShoppingListService) { }

  //When using with recipeService
  constructor(private recipeService:RecipeService){}
  ngOnInit() {
    
  }
  addToShoppingList()
  {
    // this.shoppingListService.addIngredients(this.recipeSelected.ingredients)
    this.recipeService.addToShoppingList(this.recipeSelected.ingredients);
  }
}
