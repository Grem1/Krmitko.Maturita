"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postCommand = exports.geTimeTable = exports.posTimeTable = exports.getWaterOptionsCat = exports.getFoodOptionsCat = exports.getWaterOptionsDog = exports.getFoodOptionsDog = void 0;
const db_1 = require("../utils/db");
const getFoodOptionsDog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const options = yield db_1.db.food.findMany({
            where: {
                type: 'DOG'
            }
        });
        const results = options.map((val) => {
            const { animalWeight, daylyFood } = val;
            return { Weight: animalWeight, Food: daylyFood };
        });
        return res.status(200).send(results);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(';<');
    }
});
exports.getFoodOptionsDog = getFoodOptionsDog;
const getWaterOptionsDog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const options = yield db_1.db.water.findMany({
            where: {
                type: 'DOG'
            }
        });
        const results = options.map((val) => {
            const { animalWeight, daylyWater } = val;
            return { Weight: animalWeight, Water: daylyWater };
        });
        return res.status(200).send(results);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(';<');
    }
});
exports.getWaterOptionsDog = getWaterOptionsDog;
const getFoodOptionsCat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const options = yield db_1.db.food.findMany({
            where: {
                type: 'CAT'
            }
        });
        const results = options.map((val) => {
            const { animalWeight, daylyFood } = val;
            return { Weight: animalWeight, Food: daylyFood };
        });
        return res.status(200).send(results);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(';<');
    }
});
exports.getFoodOptionsCat = getFoodOptionsCat;
const getWaterOptionsCat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const options = yield db_1.db.water.findMany({
            where: {
                type: 'CAT'
            }
        });
        const results = options.map((val) => {
            const { animalWeight, daylyWater } = val;
            return { Weight: animalWeight, Water: daylyWater };
        });
        return res.status(200).send(results);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(';<');
    }
});
exports.getWaterOptionsCat = getWaterOptionsCat;
const posTimeTable = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { doses, weight, animal } = req.body;
    try {
        const foodQuary = yield db_1.db.food.findFirst({
            where: {
                type: animal.toLowerCase() === 'cat' ? 'CAT' : 'DOG',
                animalWeight: weight
            }
        });
        const waterQuary = yield db_1.db.water.findFirst({
            where: {
                type: animal.toLowerCase() === 'cat' ? 'CAT' : 'DOG',
                animalWeight: weight
            }
        });
        yield db_1.db.timeTable.create({
            data: {
                type: animal.toLowerCase() === 'cat' ? 'CAT' : 'DOG',
                doses,
                food: {
                    connect: {
                        id: foodQuary.id
                    }
                },
                water: {
                    connect: {
                        id: waterQuary.id
                    }
                }
            }
        });
        return res.status(200).send(':-)');
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(';<');
    }
});
exports.posTimeTable = posTimeTable;
const geTimeTable = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const timeTable = yield db_1.db.timeTable.findMany({
            include: {
                food: true,
                water: true
            }
        });
        const results = timeTable.map((val) => {
            const { food, water, doses, type } = val;
            const { daylyFood } = food;
            const { daylyWater } = water;
            return {
                type,
                water: daylyWater,
                food: daylyFood,
                doses
            };
        });
        return res.status(200).send(results);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(';<');
    }
});
exports.geTimeTable = geTimeTable;
const postCommand = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { command } = req.body;
        yield db_1.db.commands.create({
            data: {
                command: command == 'food' ? 'FOOD' : command == 'calibrate' ? 'CALIBRATE' : 'WATER',
            }
        });
        return res.status(200).send(' :D ');
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(';<');
    }
});
exports.postCommand = postCommand;
