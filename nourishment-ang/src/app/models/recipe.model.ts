export class Recipe {
    recipeId: number;
    name: string;
    directions: string;

    constructor(id: number, name: string, directions:string){
        this.recipeId = id;
        this.name = name;
        this.directions = directions;
    }
}