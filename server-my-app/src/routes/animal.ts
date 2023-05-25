import express from 'express'
import { geTimeTable, getFoodOptionsCat, getFoodOptionsDog, posTimeTable, getWaterOptionsDog, getWaterOptionsCat } from '../controlers/animalControler';

const animalRouter = express.Router();

animalRouter.get('/dog/options/food', getFoodOptionsDog);
animalRouter.get('/dog/options/water', getWaterOptionsDog);
animalRouter.get('/cat/options/food', getFoodOptionsCat);
animalRouter.get('/cat/options/water', getWaterOptionsCat);

animalRouter.post('/add', posTimeTable);

animalRouter.get('/timetable', geTimeTable)

export default animalRouter;
