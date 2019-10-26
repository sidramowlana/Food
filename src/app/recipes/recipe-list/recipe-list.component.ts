import { Component, OnInit, OnDestroy} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { StoreDataService } from 'src/app/shared/storeData.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[];  //stores recipe objects
  //inject the service
  subscription:Subscription;
  constructor(private recipeService:RecipeService,
    private storeDataService:StoreDataService,
              private router:Router,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipeChanged.subscribe(
      (recipes:Recipe[])=>
    {
      this.recipes = recipes;
      console.log((recipes));
      
    });
    this.recipes = this.recipeService.getRecipes();
     
  }

  // onSelectRecipe(recipe:Recipe)
  // {
  //   this.recipeWasSelected.emit(recipe);
  // }
  
  onNewRecipe()
  {
    this.router.navigate(['new'],{relativeTo:this.activatedRoute}); // navigates to the recipe edit page
  }
  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }
}
