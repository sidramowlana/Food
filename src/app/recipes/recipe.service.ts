import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';

@Injectable()
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();
    // selectedRecipe = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe("Chocolate Fudge Cake One", "With glaze - chocolatey",
            "/assets/images/ChocolateFudge.jpg",
            // "https://s3-eu-west-1.amazonaws.com/s3.mediafileserver.co.uk/carnation/WebFiles/RecipeImages/carnationchocolatefudgecake_lg.jpg",
            [
                new Ingredient("chocolate", 2),
                new Ingredient("cashew", 20)
            ]),
        new Recipe("Chicken Pizza", "Devilled chicken with olive toppings",
            "/assets/images/Pizza.jpg",
            // "http://alicenterhouston.com/preview/pizza2/assets/img/m5.jpg",
            [
                new Ingredient("Meat", 1),
                new Ingredient("Olive", 5)
            ]),
        new Recipe("Cheese Burger", "Cheesy with french fries",
            "/assets/images/CheeseBurger.jpg",
            // "https://media4.s-nbcnews.com/j/newscms/2018_38/1368458/national-cheeseburger-day-today-main-180917_961b380c9f97a97892d22ffc00a0ca3a.fit-760w.jpg",
            [
                new Ingredient("Bun", 2),
                new Ingredient("Cheese", 1),
                new Ingredient("Meat", 1)
            ]),
        new Recipe("Strawberry Milkshake",
            "Fresh Strawberries",
            "/assets/images/StrawberryMilkshake.jpg",
            // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR402MroNHvgdPmpkS68lRRK88EibMLypeUGzfUnpw__9bqm2Z5",
            [
                new Ingredient("Milk", 1),
                new Ingredient("Strawberry", 2)
            ])
    ];

    constructor(private shoppingListService: ShoppingListService,
        private http:Http) { }

        setRecipes(recipes:Recipe[]){
            this.recipes = recipes;
            this.recipeChanged.next(this.recipes.slice());
        }
    getRecipes() {
        return this.recipes.slice(); //array are object type references in js provides a new array which will be a copy (js)
    }

    addToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

   
    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }

}