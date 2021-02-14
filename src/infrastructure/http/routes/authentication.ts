import { Router } from "express";
import { validateCredentials } from "@http/controllers/authentication";

const router = Router();

router.post("/api/authenticate", validateCredentials);

export default router;
