import express from "express";
import multer from "multer";
const router = express.Router();

// Handling multipart/form-data
const storage = multer.memoryStorage(); // multer receives stores in memory temp, relays and frees the memory by itself once theres no reference to it anymore
const upload = multer({ storage });

// Upload
router.post("/", upload.single("uploaded_file"), (req, res) => {
  const { originalname: filename, size } = req.file;
  res.json({ filename, size });
});

export default router;
