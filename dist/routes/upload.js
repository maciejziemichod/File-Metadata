"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const router = express_1.default.Router();
// Handling multipart/form-data
const storage = multer_1.default.memoryStorage(); // multer receives stores in memory temp, relays and frees the memory by itself once theres no reference to it anymore
const upload = multer_1.default({ storage });
// Upload
router.post("/", upload.single("uploaded_file"), (req, res) => {
    const { originalname: filename, size } = req.file;
    res.json({ filename, size });
});
exports.default = router;
