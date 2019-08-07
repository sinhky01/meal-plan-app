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
    this.recipeService.fetchIngredients(this.recipeId).subscribe(ingredients => this.ingredients = ingredients, error => console.log(`Error: ${error}`));
    // this.ingredients = [new Ingredient(1,"potato"), new Ingredient(2, "tomato"), new Ingredient(3, "lettuce"), new Ingredient(4,"potato"), new Ingredient(5,"potato"), new Ingredient(6,"potato"), new Ingredient(7,"potato"), new Ingredient(8,"potato"), new Ingredient(9,"potato"), new Ingredient(10,"potato"), new Ingredient(11,"potato"), new Ingredient(12,"potato"), new Ingredient(13,"potato"), new Ingredient(14,"potato"), new Ingredient(15,"otato"), new Ingredient(16,"tato"), new Ingredient(17,"orange"), new Ingredient(18,"you"), new Ingredient(19,"glad"), new Ingredient(20,"I"), new Ingredient(21,"didn't"), new Ingredient(22,"say")];
    // this.displayIngredients();
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
      elementEntry.innerHTML = element.name;
      entryList.appendChild(elementEntry);
    });
    rowDiv.appendChild(entryList);
    return rowDiv;
  }
}
