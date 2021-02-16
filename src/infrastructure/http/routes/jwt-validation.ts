import { Router } from "express";
import { validate } from "@http/controllers/jwt";

const router = Router();

router.use("/api", validate);

export default router;
