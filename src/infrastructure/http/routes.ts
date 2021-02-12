import path from "path";
import { Router, Request, Response } from "express";
import { home } from "@http/controller";

const router = Router();

router.get("/api/data", (req: Request, res: Response) => {
    return res.json({ message: "Hello from API!!!!" });
});

// router.all("/*", (req, res, next) => {
//     if (req.url.indexOf("/css") > -1) return next();

//     return res.sendFile(path.join(__dirname, "../../", "public", "index.html"));
// });

export default router;
