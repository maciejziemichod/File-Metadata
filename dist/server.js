"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
const upload_1 = __importDefault(require("./routes/upload"));
// Init
const app = express_1.default();
// Logger
app.use(morgan_1.default("dev"));
// Enabling CORS
app.use(cors_1.default());
// Static folder
app.use("/public", express_1.default.static(path_1.default.join(process.cwd(), "/dist/public")));
// Index
app.use("/", index_1.default);
// Upload
app.use("/upload", upload_1.default);
// Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
