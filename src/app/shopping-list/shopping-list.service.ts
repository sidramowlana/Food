import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{
    private ingredients: Ingredient[] = [
        new Ingredient('chocolate', 2),
        new Ingredient('apples',10),
        new Ingredient('oranges',5)
      ];
    
      getIngredients()
      {
        return this.ingredients.slice();
      }
}