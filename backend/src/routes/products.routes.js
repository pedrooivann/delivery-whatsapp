import { Router } from "express";
import {
    getProductController,
    getProductsController,
    createProductController,
    deleteProductController,
    updateProductController
} from "../controllers/product.controller.js";


const router = Router();

router.get("/:id", getProductController);
router.get("/", getProductsController);
router.post("/", createProductController);
router.delete("/:id", deleteProductController);
router.put("/:id", updateProductController);

export default router;