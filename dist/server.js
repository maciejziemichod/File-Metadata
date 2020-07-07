"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
// Init
const app = express_1.default();
// Logger
app.use(morgan_1.default("dev"));
// Enabling CORS
app.use(cors_1.default());
// Handling multipart/form-data
const storage = multer_1.default.memoryStorage(); // multer receives stores in memory temp, relays and frees the memory by itself once theres no reference to it anymore
const upload = multer_1.default({ storage });
// Static folder
app.use("/public", express_1.default.static(path_1.default.join(process.cwd(), "/dist/public")));
// Index
app.use("/", index_1.default);
// Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
/*
    https://github.com/expressjs/multer
    https://expressjs.com/en/starter/static-files.html
    https://github.com/bradtraversy/storybooks
*/
