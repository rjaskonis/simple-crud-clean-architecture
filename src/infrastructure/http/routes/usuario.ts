import { Router } from "express";
import { addUsuario, findAllUsuarios, findUsuarioById } from "@http/controllers/usuario";

const router = Router();

router.get("/api/usuarios", findAllUsuarios);
router.get("/api/usuarios/:id", findUsuarioById);
router.post("/api/usuarios", addUsuario);

export default router;
