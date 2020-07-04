import express from "express";
import morgan from "morgan";
import cors from "cors";
import multer from "multer";

// Init
const app = express();

// Logger
app.use(morgan("dev"));

// Enabling CORS
app.use(cors());

// Handling multipart/form-data
const storage = multer.memoryStorage(); // multer receives stores in memory temp, relays and frees the memory by itself once theres no reference to it anymore
const upload = multer({ storage });

// https://github.com/expressjs/multer

// Index
app.get("/", (req, res) => res.send("hello world"));

// Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
