"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const multerConfig_1 = require("./multerConfig");
const upload = (0, multer_1.default)({ storage: multerConfig_1.storage });
const app = (0, express_1.default)();
app.post("/upload", upload.single("file"), (req, res) => {
    return res.json(req.file.filename);
});
app.listen(3000);
