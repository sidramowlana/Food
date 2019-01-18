import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{

  updateIngredients = new EventEmitter<Ingredient[]>(); 
    private ingredients: Ingredient[] = [
        new Ingredient('chocolate', 2),
        new Ingredient('apples',10),
        new Ingredient('oranges',5)
      ];
    
      getIngredients()
      {
        return this.ingredients.slice();
      }

      addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.updateIngredients.emit(this.ingredients.slice());// since a coppy of the ingredients array is used u will also update that copy array.
      }
}