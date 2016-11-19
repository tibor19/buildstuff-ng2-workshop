import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-weekly-menu',
  templateUrl: './weekly-menu.component.html',
  styleUrls: ['./weekly-menu.component.css']
})
export class WeeklyMenuComponent implements OnInit {

  recipes;


  constructor(private recipeSvc: RecipeService) { }

  ngOnInit() {
    let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Saunday']
    this.recipeSvc.getRecipes().subscribe(
      (result) => this.recipes = result.slice(0, 7).map((r, index) => {
          (<any>r).weekDay = weekDays[index % weekDays.length];
          return r;
        }));
  }

}
