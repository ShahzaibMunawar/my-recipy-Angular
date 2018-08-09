import {Ingredient} from '../shared/ingredients.model';

export class Recipes {
  public name: string;
  public discription: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, imagePath: string, ingredient: Ingredient[]) {
    this.name = name;
    this.discription = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredient;
  }


}
