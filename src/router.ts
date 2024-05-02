import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

// import uploader from "./libs/utils/uploader";
// import productController from "./controllers/product.controller";
// import orderController from "./controllers/order.controller";

/** MEMBER */

router.post("/login", memberController.login);
router.post("/signup", memberController.signup);
export default router;
