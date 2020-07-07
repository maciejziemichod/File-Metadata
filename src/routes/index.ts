import express from "express";
import path from "path";

const router = express.Router();

// Index
router.get("/", (req, res) =>
  res.sendFile(path.join(process.cwd(), "/dist/views/index.html"))
);

export default router;
