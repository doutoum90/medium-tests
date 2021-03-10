import { propertyMap } from "../decorators/propertyMap";
import { statusConverter } from "../decorators/statusConverter";


export class TodosModel {
    @propertyMap('title')
    name?: string;
    @propertyMap('uid')
    id?: number;
    @statusConverter
    completed?: boolean;
    constructor() {
        this.name = undefined;
        this.completed = undefined;
        this.id = undefined;
    }
}

export interface TodosModel2 {
    title: string;
    id: number;
    completed: boolean;
}
