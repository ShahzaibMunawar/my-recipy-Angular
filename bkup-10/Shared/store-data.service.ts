import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';

@Injectable()
export class StoreDataService {
  constructor(private http: Http, private recipeService: RecipeService) {
  }

  storeRecipe() {
    const header = new Headers({'Content-Type': 'application/json'});
    return this.http.put('https://ng-recipe-book-d9199.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipe() {
    this.http.get('https://ng-recipe-book-d9199.firebaseio.com/recipes.json').subscribe(
      (response: Response) => {
        const recipe = response.json();
        this.recipeService.setRecipe(recipe);
      }
    );
  }
}
