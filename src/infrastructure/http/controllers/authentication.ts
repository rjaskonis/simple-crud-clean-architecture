import { Request, Response } from "express";
import jwt from "jsonwebtoken";

let interactor: any;

export async function validateCredentials(req: Request, res: Response) {
    const credentials = req.body;

    if (credentials.username === "admin" && credentials.senha === "123") {
        const token = jwt.sign({ authenticated: true }, req.app.get("SUPERSECRET_KEY"), { expiresIn: "8h" });
        const decodedToken: any = jwt.decode(token);

        return res.json({
            token,
            exp: decodedToken.exp,
        });
    }

    return res.json({ message: true });
}
