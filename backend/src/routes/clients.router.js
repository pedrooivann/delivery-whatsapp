import {Router} from "express";
import {
    getClientController,
    getClientsController,
    createClientController,
    deleteClientController,
    updateClientController
} from "../controllers/client.controller.js"

const router = Router();

router.get("/", getClientsController);

router.get("/:id", getClientController);

router.post("/", createClientController);
router.delete("/:id", deleteClientController);
router.put("/:id", updateClientController);

export default router;