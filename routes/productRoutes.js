import express from "express";
import {
    createProduct,
    deleteProduct,
    getAllProducts,
    updateProduct,
} from "../controllers/productControllers";
const router = express.Router();
router.get("/get-all-product", getAllProducts);
router.post("/create-product", createProduct);
router.put("/update-product/:id", updateProduct);
router.delete("/delete-product/:id", deleteProduct);
export default router;
