import { User } from "@domain/entities/user";
import { UserInteractor } from "@domain/usecases/user.interactor";
import { Request, Response } from "express";

let interactor: any;

export async function findAllUsers(req: Request, res: Response) {
    const repository = req.app.get("DATABASE_REPOSITORY");

    interactor = interactor || new UserInteractor(repository);

    const users = await interactor.findAll();

    return res.json(users);
}

export async function findUserById(req: Request, res: Response) {
    const repository = req.app.get("DATABASE_REPOSITORY");

    interactor = interactor || new UserInteractor(repository);

    const user = await interactor.findById(req.params.id);

    return res.json(user);
}

export async function addUser(req: Request, res: Response) {
    const repository = req.app.get("DATABASE_REPOSITORY");

    interactor = interactor || new UserInteractor(repository);

    const user = req.body;

    await interactor.store(new User(user.name, new Date(user.birthday)));

    return res.json(user);
}
