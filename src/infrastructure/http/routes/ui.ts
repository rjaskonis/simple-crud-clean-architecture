import { Router, Request, Response, NextFunction } from "express";
import path from "path";

const router = Router();

router.all("/*", (req: Request, res: Response, next: NextFunction) => {
    // THIS ENABLES HTML5MODE - SPA
    // console.log(req.headers['user-agent']); // client browser detection
    if (req.url.indexOf("/css") > -1) return next();

    // Just send the index.html for other files to support HTML5Mode
    return res.sendFile(path.join(__dirname, "../../../../", "public", "index.html"));
});

export default router;
