import { Usuario } from "@domain/entities/usuario";
import { UsuarioInteractor } from "@domain/usecases/usuario.interactor";
import { Request, Response } from "express";

let interactor: any;

export async function findAllUsuarios(req: Request, res: Response) {
    const repository = req.app.get("DATABASE_REPOSITORY");

    interactor = interactor || new UsuarioInteractor(repository);

    const usuarios = await interactor.findAll();

    return res.json(usuarios);
}

export async function findUsuarioById(req: Request, res: Response) {
    const repository = req.app.get("DATABASE_REPOSITORY");

    interactor = interactor || new UsuarioInteractor(repository);

    const usuario = await interactor.findById(req.params.id);

    return res.json(usuario);
}

export async function addUsuario(req: Request, res: Response) {
    const repository = req.app.get("DATABASE_REPOSITORY");

    interactor = interactor || new UsuarioInteractor(repository);

    const usuario = req.body;

    await interactor.store(new Usuario(usuario.nome, usuario.sobrenome, usuario.username, usuario.salt, usuario));

    return res.json(usuario);
}
