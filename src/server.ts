import express from "express";
import morgan from "morgan";
import cors from "cors";
import multer from "multer";
import path from "path";

// Init
const app = express();

// Logger
app.use(morgan("dev"));

// Enabling CORS
app.use(cors());

// Handling multipart/form-data
const storage = multer.memoryStorage(); // multer receives stores in memory temp, relays and frees the memory by itself once theres no reference to it anymore
const upload = multer({ storage });

// Static folder
app.use("/public", express.static(path.join(process.cwd(), "/dist/public")));

// Index
app.get("/", (req, res) =>
  res.sendFile(path.join(process.cwd(), "/dist/views/index.html"))
);

// Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
