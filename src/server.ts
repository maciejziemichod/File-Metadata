import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import index from "./routes/index";
import upload from "./routes/upload";

// Init
const app = express();

// Logger
app.use(morgan("dev"));

// Enabling CORS
app.use(cors());

// Static folder
app.use("/public", express.static(path.join(process.cwd(), "/dist/public")));

// Index
app.use("/", index);

// Upload
app.use("/upload", upload);

// Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
