import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[]=[
    new Recipe("Chocolate Fudge Cake One","Chocolaty",
    "https://s3-eu-west-1.amazonaws.com/s3.mediafileserver.co.uk/carnation/WebFiles/RecipeImages/carnationchocolatefudgecake_lg.jpg")
    ,new Recipe("Pudding","chocolate pudding",
    "https://img.taste.com.au/bz2rQPJ6/taste/2016/11/soft-centred-chocolate-pudding-16964-1.jpeg")
    ,new Recipe("Chocolate Fudge Cake Three","Chocolaty",
    "https://s3-eu-west-1.amazonaws.com/s3.mediafileserver.co.uk/carnation/WebFiles/RecipeImages/carnationchocolatefudgecake_lg.jpg")
    ];
  //stores recipe objects
  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe(recipe:Recipe)
  {
    this.recipeWasSelected.emit(recipe);
  }
  

}
