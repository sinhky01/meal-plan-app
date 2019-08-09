import { Component, OnInit } from '@angular/core';
import { ApiRecipeService } from '../services/api-recipe.service';
import { apiRecipe } from '../models/api-recipe.model';

@Component({
  selector: 'app-suggested-recipe',
  templateUrl: './suggested-recipe.component.html',
  styleUrls: ['./suggested-recipe.component.css']
})
export class SuggestedRecipeComponent implements OnInit {

  public recipe: apiRecipe;

  constructor(private apiRecipe:ApiRecipeService) { }

  ngOnInit() {
    this.getApiRecipeInfo();
  }

  getApiRecipeInfo(): void {
    this.apiRecipe.fetchMeal().subscribe(
      recipe => this.recipe=recipe,
      error => console.log(`Error: ${error}`)
    );
    console.log(this.recipe);
  }
}

