const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const authMiddleware = require("../middlewares/authMiddleware");
const upload = require("../middlewares/multer");

router.get("/", authMiddleware, getAllProducts);
router.get("/:id", authMiddleware, getProductById);
router.post("/", authMiddleware, upload.single("image"), createProduct);
router.put("/:id", authMiddleware, upload.single("image"), updateProduct);
router.delete("/:id", authMiddleware, deleteProduct);

module.exports = router;
