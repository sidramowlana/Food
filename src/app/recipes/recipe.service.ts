import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService
{
    selectedRecipe = new EventEmitter<Recipe>();
    private recipes:Recipe[]=[
        new Recipe("Chocolate Fudge Cake One","With glaze - chocolatey",
        "https://s3-eu-west-1.amazonaws.com/s3.mediafileserver.co.uk/carnation/WebFiles/RecipeImages/carnationchocolatefudgecake_lg.jpg",
        [
            new Ingredient("chocolate", 2),
            new Ingredient("cashew",20)
        ]),
        new Recipe("Chicken Pizza","Devilled chicken with olive toppings",
        "http://alicenterhouston.com/preview/pizza2/assets/img/m5.jpg",
        [
            new Ingredient("Meat", 1),
            new Ingredient("Olive",5)
        ]),
        new Recipe("Cheese Burger", "Cheesy with french fries",
        "https://media4.s-nbcnews.com/j/newscms/2018_38/1368458/national-cheeseburger-day-today-main-180917_961b380c9f97a97892d22ffc00a0ca3a.fit-760w.jpg",
        [
            new Ingredient("Bun",2),
            new Ingredient("Cheese",1),
            new Ingredient("Meat",1)
        ])
        ];

    
    getRecipes()
    {
        return this.recipes.slice(); //array are object type references in js provides a new array which will be a copy (js)
    }
    
}