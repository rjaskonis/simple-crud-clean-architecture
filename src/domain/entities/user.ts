import { Entity } from "@domain/entity";

export class User implements Entity {
    id: Number;

    constructor(public name: string, public birthday: Date) {}
}
