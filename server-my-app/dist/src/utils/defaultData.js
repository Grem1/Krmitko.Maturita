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
exports.data = void 0;
const db_1 = require("./db");
const data = () => __awaiter(void 0, void 0, void 0, function* () {
    const test = yield db_1.db.food.findFirst({
        where: {
            type: "CAT"
        }
    });
    if (test !== null) {
        return;
    }
    yield db_1.db.food.createMany({
        data: [
            {
                type: 'DOG',
                animalWeight: 5,
                daylyFood: 100,
            },
            {
                type: 'DOG',
                animalWeight: 10,
                daylyFood: 200,
            },
            {
                type: 'DOG',
                animalWeight: 15,
                daylyFood: 280,
            },
            {
                type: 'CAT',
                animalWeight: 2,
                daylyFood: 140,
            },
            {
                type: 'CAT',
                animalWeight: 3,
                daylyFood: 190,
            },
            {
                type: 'CAT',
                animalWeight: 4,
                daylyFood: 230,
            },
            {
                type: 'CAT',
                animalWeight: 5,
                daylyFood: 280,
            }
        ]
    });
    yield db_1.db.water.createMany({
        data: [
            {
                type: 'DOG',
                animalWeight: 5,
                daylyWater: 350,
            },
            {
                type: 'DOG',
                animalWeight: 10,
                daylyWater: 700,
            },
            {
                type: 'DOG',
                animalWeight: 15,
                daylyWater: 1400,
            },
            {
                type: 'CAT',
                animalWeight: 2,
                daylyWater: 140,
            },
            {
                type: 'CAT',
                animalWeight: 3,
                daylyWater: 200,
            },
            {
                type: 'CAT',
                animalWeight: 4,
                daylyWater: 260,
            },
            {
                type: 'CAT',
                animalWeight: 5,
                daylyWater: 320,
            }
        ]
    });
});
exports.data = data;
