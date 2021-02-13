import { Router, Request, Response } from "express";
import { addUser, findAllUsers, findUserById } from "@http/controllers/user";

const router = Router();

router.get("/api/users", findAllUsers);
router.get("/api/users/:id", findUserById);
router.post("/api/users", addUser);

export default router;
