import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[];  //stores recipe objects


  //inject the service
  constructor(private recipeService:RecipeService,
              private router:Router,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  // onSelectRecipe(recipe:Recipe)
  // {
  //   this.recipeWasSelected.emit(recipe);
  // }
  
  onNewRecipe()
  {
    this.router.navigate(['new-recipe'],{relativeTo:this.activatedRoute});
  }
}
