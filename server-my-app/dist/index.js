"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const defaultData_1 = require("./src/utils/defaultData");
const animal_1 = __importDefault(require("./src/routes/animal"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.use('/animal', animal_1.default);
app.listen(port, () => {
    (0, defaultData_1.data)();
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
