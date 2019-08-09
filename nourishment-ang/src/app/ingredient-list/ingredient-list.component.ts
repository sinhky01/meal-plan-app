import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {

  @Input() recipeId: number;
  ingredients: Array<Ingredient>;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    console.log("Recipe id is " + this.recipeId);
    this.recipeService.fetchIngredients(this.recipeId).subscribe(ingredients => this.ingredients = ingredients, error => console.log(`Error: ${error}`), () => this.displayIngredients());
    
  }


  displayIngredients() {    
    let ingIter = 0;
    while(ingIter < this.ingredients.length){
      let colIngArr: Array<Ingredient> = new Array<Ingredient>();
      let colIter: number = 0;
      if(this.ingredients.length <= 16)
      {
        while(colIter < 4 && ingIter < this.ingredients.length)
        {
          colIngArr.push(this.ingredients[ingIter]);
          colIter++;
          ingIter++;
        }
        
      }
      else {
        console.log("More than 16 ingredients");
        while(colIter < this.ingredients.length/4 && ingIter < this.ingredients.length)
        {
          colIngArr.push(this.ingredients[ingIter]);
          colIter++;
          ingIter++;
        }
        
      }
      document.getElementById('ingRow').appendChild(this.createCol(colIngArr));
    }
  }

  createCol(colIng: Array<Ingredient>): HTMLDivElement {
    let rowDiv: HTMLDivElement = document.createElement('div');
    rowDiv.setAttribute("class", "col-md-3 h-100");
    rowDiv.setAttribute("style", "border: 2px solid orange; border-radius: 5px");
    let entryList: HTMLUListElement = document.createElement("ul");
    colIng.forEach(element => {
      let elementEntry: HTMLLIElement = document.createElement("li");
      elementEntry.innerHTML = element.usedBy[0].quantity + " " + element.usedBy[0].units + " " + element.ingredient;
      entryList.appendChild(elementEntry);
    });
    rowDiv.appendChild(entryList);
    return rowDiv;
  }
}
