import { Router } from "express";
import {
    getOrderItemController,
    getOrderItemsController,
    createOrderItemController,
    deleteOrderItemController,
    updateAmountController,
    updateOrderItemController
} from "../controllers/order-items.controller.js";

const router = Router({mergeParams: true});

router.get("/", getOrderItemsController);
router.get("/:id", getOrderItemController);
router.post("/", createOrderItemController);
router.delete("/:id", deleteOrderItemController);
router.patch("/:id", updateOrderItemController);
router.patch("/:id/amount", updateAmountController);


export default router;

