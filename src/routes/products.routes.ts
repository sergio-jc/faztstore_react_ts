import Router from "express-promise-router";
import {
    getProductsHandler,
    createProductHandler,
    deleteProductHandler,
    updateProductHandler,
    getProductHandler
} from "../controllers/products.controller";

const router = Router();

router.get("/products", getProductsHandler);
router.post("/products", createProductHandler);

router.delete("/products/:id", deleteProductHandler);
router.put("/products/:id", updateProductHandler);
router.get("/products/:id", getProductHandler);

export default router;
