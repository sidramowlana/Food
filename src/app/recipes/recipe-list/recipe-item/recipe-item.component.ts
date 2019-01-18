import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

 @Input() recipeElement:Recipe;
//  @Output() selectedRecipe = new EventEmitter<void>();
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }  

  onSelect()
  {
    // this.selectedRecipe.emit();
    this.recipeService.selectedRecipe.emit(this.recipeElement);
  }

}
