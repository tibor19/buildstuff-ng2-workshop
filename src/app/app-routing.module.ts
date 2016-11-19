import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RecipeComponent} from './recipe/recipe.component';
import {WeeklyMenuComponent} from './weekly-menu/weekly-menu.component';
import {RandomRecipeGuard} from './services/random-recipe-guard.service';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'recipe/:id',
    component: RecipeComponent
  },
  {
    path: 'random-recipe',
    canActivate: [RandomRecipeGuard],
    component: RecipeComponent
  },
  {
    path: 'weekly-menu',
    component: WeeklyMenuComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule],
  providers: [RandomRecipeGuard]
})
export class AppRoutingModule { }
