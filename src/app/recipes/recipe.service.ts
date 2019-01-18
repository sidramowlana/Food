import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService
{
    selectedRecipe = new EventEmitter<Recipe>();
    private recipes:Recipe[]=[
        new Recipe("Chocolate Fudge Cake One","Chocolaty",
        "https://s3-eu-west-1.amazonaws.com/s3.mediafileserver.co.uk/carnation/WebFiles/RecipeImages/carnationchocolatefudgecake_lg.jpg")
        ,new Recipe("Pudding","chocolate pudding",
        "https://img.taste.com.au/bz2rQPJ6/taste/2016/11/soft-centred-chocolate-pudding-16964-1.jpeg")
        ,new Recipe("Chocolate Fudge Cake Three","Chocolaty",
        "https://s3-eu-west-1.amazonaws.com/s3.mediafileserver.co.uk/carnation/WebFiles/RecipeImages/carnationchocolatefudgecake_lg.jpg")
        ];
    
    getRecipes()
    {
        return this.recipes.slice(); //array are object type references in js provides a new array which will be a copy (js)
    }
    
}