import { Router } from "express";
import { storeUsuario, deleteUsuario, findAllUsuarios, findUsuarioById } from "@http/controllers/usuario";

const router = Router();

router.get("/api/usuarios", findAllUsuarios);
router.get("/api/usuarios/:id", findUsuarioById);
router.post("/api/usuarios", storeUsuario);
router.delete("/api/usuarios", deleteUsuario);

export default router;
