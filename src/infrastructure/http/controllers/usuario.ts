import { Request, Response } from "express";
import { Usuario } from "@domain/entities/usuario";
import { UsuarioInteractor } from "@domain/usecases/usuario.interactor";
import { SequelizeAdapter } from "@data/adapters/sequelize";
import usuarioSchemaModel from "@infrastructure/database/schema/models/usuario";

let interactor: any;

export async function findAllUsuarios(req: Request, res: Response) {
    const repository = new SequelizeAdapter(req.app.get("DATABASE_CONNECTION"), usuarioSchemaModel);

    interactor = interactor || new UsuarioInteractor(repository);

    const usuarios = await interactor.findAll();

    return res.json(usuarios);
}

export async function findUsuarioById(req: Request, res: Response) {
    const repository = new SequelizeAdapter(req.app.get("DATABASE_CONNECTION"), usuarioSchemaModel);

    interactor = interactor || new UsuarioInteractor(repository);

    const usuario = await interactor.findOne({ where: { id: req.params.id } });

    return res.json(usuario);
}

export async function storeUsuario(req: Request, res: Response) {
    const repository = new SequelizeAdapter(req.app.get("DATABASE_CONNECTION"), usuarioSchemaModel);

    interactor = interactor || new UsuarioInteractor(repository);

    const usuario = req.body;

    const usuarioRegistrar = usuario.id ? await interactor.findOne({ where: { id: usuario.id } }) : usuario;

    try {
        const usuarioRegistrado = await interactor.store(
            usuario.id
                ? { ...usuarioRegistrar, ...usuario }
                : new Usuario(usuario.nome, usuario.sobrenome, usuario.username, usuario.salt, usuario)
        );

        return res.json(usuarioRegistrado);
    } catch (err) {
        return res.sendStatus(400);
    }
}

export async function deleteUsuario(req: Request, res: Response) {
    const repository = new SequelizeAdapter(req.app.get("DATABASE_CONNECTION"), usuarioSchemaModel);

    interactor = interactor || new UsuarioInteractor(repository);

    const usuario = req.body;

    const usuarioDeletar = await interactor.findOne({ where: { id: usuario.id } });

    console.log(usuarioDeletar);

    if (!usuarioDeletar) {
        return res.sendStatus(400);
    }

    try {
        await interactor.delete(usuarioDeletar);

        return res.sendStatus(200);
    } catch (err) {
        console.log(err);

        return res.sendStatus(400);
    }
}
