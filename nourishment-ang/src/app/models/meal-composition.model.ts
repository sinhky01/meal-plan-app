export class MealComposition
{
    mealCompositionPk: {
        recipeId: number;
        ingredientId: number;
    }
    quantity: number;
    units: string;

    constructor(passedPk: {recipeId:number, ingredientId:number} , quantity: number, units: string) {
        this.mealCompositionPk.recipeId = passedPk.recipeId;
        this.mealCompositionPk.ingredientId = passedPk.ingredientId;
        this.quantity = quantity;
        this.units = units;
    }
}