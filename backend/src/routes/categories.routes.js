import { Router } from "express";
import {
    getCategoriesController,
    getCategoryController,
    createCategoryController,
    deleteCategoryController,
    updateCategoryController
} from "../controllers/category.controller.js"

const router = Router();

router.get("/", getCategoriesController);
router.get("/:id", getCategoryController);
router.post("/", createCategoryController);
router.delete("/:id", deleteCategoryController);
router.put("/:id", updateCategoryController);

export default router;