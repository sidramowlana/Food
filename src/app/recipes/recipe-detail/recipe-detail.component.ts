import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeSelected:Recipe;
  //When using directly with ShoppingListService
  // constructor(private shoppingListService:ShoppingListService) { }

  //When using with recipeService
  constructor(private recipeService:RecipeService,
              private activatedRoute:ActivatedRoute,
              private router:Router){}

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      (params:Params)=>
      {
        this.recipeSelected = this.recipeService.getRecipe(+params['id']);
        console.log(this.recipeSelected.ingredients);
        
      }
    );
    
  }
  addToShoppingList()
  {
    // this.shoppingListService.addIngredients(this.recipeSelected.ingredients)
    this.recipeService.addToShoppingList(this.recipeSelected.ingredients);
  }

  onEditRecipe()
  {
    //because the recipe is loaded
    this.router.navigate(['edit'],{relativeTo:this.activatedRoute});

    //alternative: when the recipe is not loaded
    // this.router.navigate(['../',this.id,'edit'],{relativeTo:this.activatedRoute});
  }

  onDeleteRecipe()
  {
    
  }
}
