import { Interactor } from "@domain/interactor";
import { Usuario } from "@domain/entities/usuario";
import { Repository } from "@/data/repository";
import Cypher from "@data/cryptography/cypher";

export class UsuarioInteractor implements Interactor {
    constructor(private readonly repository: Repository) {}

    private async generateHashPassword(password: string, rounds: number): Promise<string> {
        let countedRounds: number = 0;
        let finalHash: string | null = null;

        while (countedRounds < rounds) {
            finalHash = await Cypher.encrypt(finalHash || password);

            countedRounds++;
        }

        return finalHash || "";
    }

    async query(command: string): Promise<Array<Usuario>> {
        if (this.repository.query) return this.repository.query(command);
        else return [];
    }

    async findAll(): Promise<Array<Usuario>> {
        if (this.repository.findAll) {
            return this.repository.findAll();
        } else return [];
    }

    async findOne(param: any): Promise<Usuario | undefined> {
        if (this.repository.findOne) {
            const Usuario: Usuario = await this.repository.findOne(param);

            return Usuario;
        }
    }

    async store(usuario: Usuario): Promise<any> {
        if (this.repository.store) {
            const hashPassword = usuario.id ? usuario.senha : await this.generateHashPassword(usuario.senha + usuario.salt, 3);

            return this.repository.store({ ...usuario, senha: hashPassword });
        }
    }

    async delete(usuario: Usuario): Promise<void> {
        if (this.repository.delete) {
            return this.repository.delete({ where: { id: usuario.id } });
        }
    }
}
