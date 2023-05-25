"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const animalControler_1 = require("../controlers/animalControler");
const animalRouter = express_1.default.Router();
animalRouter.get('/dog/options/food', animalControler_1.getFoodOptionsDog);
animalRouter.get('/dog/options/water', animalControler_1.getWaterOptionsDog);
animalRouter.get('/cat/options/food', animalControler_1.getFoodOptionsCat);
animalRouter.get('/cat/options/water', animalControler_1.getWaterOptionsCat);
animalRouter.post('/add', animalControler_1.posTimeTable);
animalRouter.get('/timetable', animalControler_1.geTimeTable);
exports.default = animalRouter;
