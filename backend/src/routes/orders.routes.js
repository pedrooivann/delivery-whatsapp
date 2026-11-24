import { Router } from "express";
import {
    getOrderController,
    getOrdersController,
    createOrderController,
    deleteOrderController,
    updateOrderAddressController,
    updateOrderNotesController,
    updateOrderStatusController
} from "../controllers/order.controller.js"

const router = Router();

router.get("/", getOrdersController);
router.get("/:id", getOrderController);
router.post("/", createOrderController);
router.delete("/:id", deleteOrderController);
router.patch("/:id/address", updateOrderAddressController);
router.patch("/:id/notes", updateOrderNotesController);
router.patch("/:id/status", updateOrderStatusController);

export default router;