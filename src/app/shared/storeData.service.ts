import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators'
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from './ingredient.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class StoreDataService {
    constructor(private http: Http,
        private recipeService: RecipeService,
        private shoppingListService: ShoppingListService,
        private authService: AuthService) { }

    saveRecipes() {
        //put request to override the data in ur database
        // const token = this.authService.getToken();
        const token = this.authService.getToken(); // get the token
        //pass the token with the url so that this is made by the logged current user
        return this.http.put('https://food-recipe-book-880f1.firebaseio.com/recipes.json?auth='+token, this.recipeService.getRecipes());

    }

    fetchRecipes() {
        // const token = this.authService.getToken();
        const token = this.authService.getToken();
        this.http.get('https://food-recipe-book-880f1.firebaseio.com/recipes.json?auth='+token)
            .pipe(
                map(
                    (response: Response) => {
                        const recipes: Recipe[] = response.json();
                        for (let r of recipes) {
                            if (!r['ingredients']) {
                                console.log(r);

                                r['ingredients'] = [];
                            }
                        }
                        return recipes;
                    })
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            )
    }

    saveShoppingList() {
        return this.http.put('https://food-recipe-book-880f1.firebaseio.com/shoppingList.json', this.shoppingListService.getIngredients());
    }

    fetchShoppingList() {
        this.http.get('https://food-recipe-book-880f1.firebaseio.com/shoppingList.json')
            .pipe(
                map((response: Response) => {
                    const ingredient: Ingredient[] = response.json();
                    return ingredient;
                })
            )
            .subscribe((ingredients: Ingredient[]) => {
                this.shoppingListService.setIngredients(ingredients);
            })
    }
}