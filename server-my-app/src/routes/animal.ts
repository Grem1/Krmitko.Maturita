import express from 'express'
import { geTimeTable, getFoodOptionsCat, getFoodOptionsDog, posTimeTable, getWaterOptionsDog, getWaterOptionsCat, postCommand } from '../controlers/animalControler';

const animalRouter = express.Router();

animalRouter.get('/dog/options/food', getFoodOptionsDog);
animalRouter.get('/dog/options/water', getWaterOptionsDog);
animalRouter.get('/cat/options/food', getFoodOptionsCat);
animalRouter.get('/cat/options/water', getWaterOptionsCat);

animalRouter.post('/add', posTimeTable);
animalRouter.post('/add/command', postCommand);

animalRouter.get('/timetable', geTimeTable)

export default animalRouter;
