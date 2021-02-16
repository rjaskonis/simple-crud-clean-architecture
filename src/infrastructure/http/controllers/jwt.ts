import path from "path";
import { verify as jwtVerify, JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export function validate(req: Request, res: Response, next: NextFunction) {
    const { token } = req.cookies;

    if (token) {
        // verifies secret and checks exp
        jwtVerify(token, req.app.get("SUPERSECRET_KEY"), (err: JsonWebTokenError | TokenExpiredError | any, decoded: any) => {
            if (err) return res.status(401).send("Invalid token. Probably expired."); // 401 - Unauthorized

            next();
        });
    } else {
        res.sendStatus(403);
    }
}
