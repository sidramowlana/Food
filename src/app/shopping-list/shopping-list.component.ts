import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  subscription :Subscription;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.updateIngredients.subscribe(
      (ingredient:Ingredient[])=>
      {
        this.ingredients = ingredient;
      }
    );
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }
  // onIngredientAdded(ingredient:Ingredient)
  // {
  //   // this.ingredients.push(ingredient);
  //   this.shoppingListService.addIngredient(ingredient);
  // }
}
