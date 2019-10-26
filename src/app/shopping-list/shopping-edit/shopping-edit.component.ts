import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { StoreDataService } from 'src/app/shared/storeData.service';

import { Response } from '@angular/http';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  // @Output() addingIngredient = new EventEmitter<Ingredient>();
  @Output() deleteIngredient = new EventEmitter<Ingredient>();
  editMode = false;
  editItemIndex: number;
  edittingItem: Ingredient;
  subscription: Subscription

  @ViewChild('form') formRef: NgForm;
  // @ViewChild('nameInput') nameInputRef :ElementRef;
  // @ViewChild('amountInput') amountInputRef :ElementRef;  
  constructor(private shoppingListService: ShoppingListService,
    private storeDataService:StoreDataService) { }

  ngOnInit() {
    
    this.subscription = this.shoppingListService.startEditItem.subscribe((index: number) => {
      this.editItemIndex = index;
      this.editMode = true;
      this.edittingItem = this.shoppingListService.getIngredient(this.editItemIndex);
      this.formRef.setValue({
        name: this.edittingItem.name,
        amount: this.edittingItem.amount
      })
    })
  }

  onSubmitRecipe() {
    // const ingredientAdd = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    const ingredientAdd = new Ingredient(this.formRef.value.name, this.formRef.value.amount);
    // this.addingIngredient.emit(ingredientAdd);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editItemIndex, ingredientAdd);
    }
    else {
      this.shoppingListService.addIngredient(ingredientAdd);
    }
    this.editMode = false;
    this.formRef.reset();

  }

  onClear() {
    this.formRef.reset();
    this.editMode = false;
  }

  onDelete() {
  //   if(this.editMode)
  //   {
  //   this.shoppingListService.deleteIngredient(this.editItemIndex);
  //   this.onClear();
  // }
  this.shoppingListService.deleteIngredient(this.editItemIndex);
    this.onClear();
}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSave(){
    this.storeDataService.saveShoppingList().subscribe(
      (response:Response)=>
        {
            console.log(response);
            
        });
    
  }
  onFetch(){
    this.storeDataService.fetchShoppingList();
  }
}
