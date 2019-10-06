  import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService{

  updateIngredients = new Subject<Ingredient[]>(); 
  startEditItem = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('chocolate', 2),
        new Ingredient('apples',10),
        new Ingredient('oranges',5)
      ];
    
      getIngredients()
      {
        return this.ingredients.slice();
      }

      getIngredient(index:number)
      {
        return this.ingredients[index];
      }
      addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        // this.updateIngredients.emit(this.ingredients.slice());// since a copy of the ingredients array is used u will also update that copy array.
        this.updateIngredients.next(this.ingredients.slice());
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
        this.updateIngredients.next(this.ingredients.slice());
      }

      updateIngredient(index:number, newIngredient:Ingredient)
      {
        this.ingredients[index] = newIngredient;
        this.updateIngredients.next(this.ingredients.slice());
      }
      
      deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        this.updateIngredients.next(this.ingredients.slice());
      }
}