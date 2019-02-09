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

      //When Shopping service is directly used in recipe-detail-component
      // addIngredients(ingredient:Ingredient[])
      // {
      //   this.ingredients.push(...ingredient);
      //   this.updateIngredients.emit(this.ingredients.slice());
      // }

      //when shopping service is injected in recipe service
      addIngredients(ingredient:Ingredient[])
      {
        // Solution 1: of getting all the ingeredients from the array
        // for(let i of ingredient)
        // {
        //   this.addIngredient(i);
        // }

        // Solution 2 
        //can push the ingredients as a list of single ingredient
        //inside the ingredients array the elements of Ingredient[] is pushed as single array lik a single element. 
        this.ingredients.push(...ingredient);
        this.updateIngredients.emit(this.ingredients.slice());
      }
}