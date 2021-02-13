import { Entity } from "@domain/entity";

export class Usuario implements Entity {
    public id: Number;
    public datacriacao: Date;

    constructor(public nome: string, public sobrenome: string, public username: string, public salt: string, public senha: string) {
        this.datacriacao = new Date();
    }
}
