export class Recipe {
    id: number;
    name: string;
    instructions: string;

    constructor(id: number, name: string, instructions:string){
        this.id = id;
        this.name = name;
        this.instructions = instructions;
    }
}