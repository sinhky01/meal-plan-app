import { MealComposition } from './meal-composition.model';

export class Ingredient {
    ingredientId: number;
    ingredient: string;
    usedBy: Array<MealComposition>
    userPrefs: Array<any>

    constructor(id: number, name: string, mealComps: Array<MealComposition>, userPrefs: Array<any>) {
        this.ingredientId = id;
        this.ingredient = name;
        this.usedBy = mealComps;
        this.userPrefs = userPrefs;
    }
}