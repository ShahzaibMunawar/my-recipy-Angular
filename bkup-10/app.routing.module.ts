import {ActivatedRoute, Route, Router, RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {NgModule} from '@angular/core';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {RecipeItemComponent} from './recipes/recipe-list/recipe-item/recipe-item.component';
import {RecipesStartComponent} from './recipes/recipes-start/recipes-start.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipesEditComponent} from './recipes/recipes-edit/recipes-edit.component';

const appRoute: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {
    path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: RecipesStartComponent},
    {path: 'new', component: RecipesEditComponent},
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipesEditComponent}
  ]
  },
  {path: 'shopping-List', component: ShoppingListComponent},
  {path: '**', redirectTo: '/recipes'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  constructor(private route: Router, private activeRoute: ActivatedRoute) {
  }

}
