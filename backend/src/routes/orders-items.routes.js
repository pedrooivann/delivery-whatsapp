import { Router } from "express";
import {
    getOrderItemController,
    getOrderItemsController,
    createOrderItemController,
    deleteOrderItemController,
    updateAmountController
} from "../controllers/order-items.controller.js";

const router = Router();

router.get("/", getOrderItemsController);
router.get("/:id", getOrderItemController);
router.post("/", createOrderItemController);
router.delete("/:id", deleteOrderItemController);
router.put("/:id", updateAmountController);

export default router;

