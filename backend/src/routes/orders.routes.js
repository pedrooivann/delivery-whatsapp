import { Router } from "express";
import {
    getOrderController,
    getOrdersController,
    createOrderController,
    deleteOrderController,
    updateOrderAddressController,
    updateOrderStatusController
} from "../controllers/order.controller.js"

const router = Router();

router.get("/", getOrdersController);
router.get("/:id", getOrderController);
router.post("/", createOrderController);
router.delete("/:id", deleteOrderController);
router.put("/:id/address", updateOrderAddressController);
router.put("/:id/status", updateOrderStatusController);

export default router;