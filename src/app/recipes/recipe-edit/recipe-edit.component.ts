import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { formGroupNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id:number;
  editMode = false;
  recipeForm:FormGroup;

  constructor(private activatedRoute:ActivatedRoute,
    private recipeService:RecipeService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params:Params)=>
      {
        this.id = +params['id'];       
        this.editMode = params['id'] != null;  //ur checking whether the parameters is without an id (which is null)
        //if it is not with a id then false if it is with an id then true which means it will be true edit mode
        console.log(this.editMode);
        this.initForm();
      }
    );
   
  }
  onSubmit(){
    // console.log(this.recipeForm); 
    // const newRecipe = new Recipe(
    //   this.recipeForm.valid['recipeName'],
    //   this.recipeForm.valid['recipeDescription'],
    //   this.recipeForm.valid['recipeImagePath'],
    //   this.recipeForm.valid['ingredients'],
    // );

    if(this.editMode)
    {
      this.recipeService.updateRecipe(this.id,this.recipeForm.value);
    }
    else{
      this.recipeService.addRecipe(this.recipeForm.value);
    }
  }
  private initForm(){
    let name = '';
    let imagePath = '';
    let description = '';
    let recipeIngredients = new FormArray([]);
    if(this.editMode)
    {
      //getting the default value for the edit recipe
      const recipe = this.recipeService.getRecipe(this.id);
      name = recipe.recipeName;
      imagePath = recipe.recipeImagePath;
      description = recipe.recipeDescription;
      if(recipe['ingredients']) //checks if the recipe has ingredients or whether it has nothing
      {
        for(let ingredient of recipe.ingredients)
        {
          recipeIngredients.push(
            new FormGroup({
            'name': new FormControl(ingredient.name,Validators.required),
            'amount':new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));
        }
      }
    }
    this.recipeForm = new FormGroup({
      'recipeName':new FormControl(name,Validators.required),
      'recipeDescription':new FormControl(description,Validators.required),
      'recipeImagePath':new FormControl(imagePath),
      'ingredients': recipeIngredients
    })
  }
  onAddIngredient()
  {
    //since i wanted to add a formgroup with two controls this is how u do
    //if ur adding a single control u can do it like=> .push(new FormContr())
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onCancel(){
    this.recipeForm.reset();
  }

  onDeleteIngredient(index:number){
    // this.recipeService.deleteIngredient(this.id);
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index)
  }
}