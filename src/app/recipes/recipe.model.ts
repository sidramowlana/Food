import { Ingredient } from '../shared/ingredient.model';

export class Recipe{
    public recipeName:string;
    public recipeDescription:string;
    public recipeImagePath:string;
    public ingredients :Ingredient[];

    constructor(name:string, description:string, imagePath:string, ingredient:Ingredient[])
    {
        this.recipeName = name;
        this.recipeDescription = description;
        this.recipeImagePath = imagePath;
        this.ingredients = ingredient;
    }
}