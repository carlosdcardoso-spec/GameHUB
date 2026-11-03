
import { Router } from "express";
import * as estudioController from "../controllers/estudioController.js";
import validarId from "../middlewares/validarId.js";

const router = Router();

router.get("/estudios", );
router.get("/estudios/:id", validarId, );
router.post("/estudios", );
router.put("/estudios/:id", validarId, estudioController.atualizar);
router.delete("/estudios/:id", validarId, estudioController.excluir);

export default router;


