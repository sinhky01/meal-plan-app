import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private recipeService: RecipeService) { }
  private resultRecipes: Array<Recipe>

  ngOnInit() {
    console.log("Hi");
    this.recipeService.fetchAllRecipes().subscribe(recipes => this.resultRecipes = recipes, error => console.log(`Error: ${error}`), () => this.displayRecipeResults());
    console.log("hey");
  }

  displayRecipeResults() {
    this.resultRecipes.forEach((recipe) => {
      console.log("hello");
      //Create elements
      let recipeRow:HTMLTableRowElement = document.createElement('tr');
      let rowAnchor:HTMLAnchorElement = document.createElement('a');
      let recipeName:HTMLTableDataCellElement = document.createElement('td');
      
      //Add routerLink to anchor
      rowAnchor.setAttribute('routerLink', 'recipe');

      //Populate and format of td
      //rowAnchor.innerHTML = recipe.name;
      recipeName.innerHTML = recipe.name;

      //Add td to row with routerLink anchor
      //recipeName.appendChild(rowAnchor);
      recipeRow.appendChild(recipeName);
      
      //rowAnchor.appendChild(recipeName);
      //recipeRow.appendChild(rowAnchor);

      //Add onclick to set recipe
      recipeRow.onclick = () => {this.setRecipeInStorage(recipe)};

      //Add recipeRow to table
      document.getElementById('resultSet').appendChild(recipeRow);

    })
  }

  setRecipeInStorage(recipe:Recipe) {
    localStorage.setItem('selectedRecipe', recipe.recipeId.toString());
  }


}
