import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.css']
})
export class RecipeViewComponent implements OnInit {

  constructor(private recipeService: RecipeService ) { }
  recipeId: number = 1;
  recipe: Recipe;

  ngOnInit() {
    this.recipeService.fetchRecipe(this.recipeId).subscribe(recipe => this.recipe = recipe, error => console.log(`Error: ${error}`), () => this.displayRecipe());
  }

  displayRecipe() {
    document.getElementById('directionElement').innerHTML = this.recipe.directions;
    document.getElementById('recipeTitleElement').innerHTML = this.recipe.name;
  }

}
