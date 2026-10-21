import {Router} from "express";
import {
    getClientController,
    getClientsController,
    getClientByTelephoneController,
    createClientController,
    deleteClientController,
    updateClientController
} from "../controllers/client.controller.js"

const router = Router();

router.get("/:id", getClientController);
router.get("/", getClientsController );
router.get("/clients/telephone", getClientByTelephoneController);
router.post("/", createClientController);
router.delete("/:id", deleteClientController);
router.updateClientController("/:id", updateClientController);

export default router;