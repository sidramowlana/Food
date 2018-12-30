import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() addingIngredient = new EventEmitter<Ingredient>();
  @Output() deleteIngredient = new EventEmitter<Ingredient>();

  @ViewChild('nameInput') nameInputRef :ElementRef;
  @ViewChild('amountInput') amountInputRef :ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onAddedRecipe()
  {
    const ingredientAdd = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.addingIngredient.emit(ingredientAdd);
  }

  onDelete()
  {    
  }
}
