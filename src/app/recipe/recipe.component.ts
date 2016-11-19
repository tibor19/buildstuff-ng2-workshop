import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit, OnChanges {

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.activeRoute.snapshot.params['id']);
  }

  ngOnChanges() {
    console.log(this.activeRoute.snapshot.params['id']);
  }

}
