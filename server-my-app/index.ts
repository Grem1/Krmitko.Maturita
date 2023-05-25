import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { data } from './src/utils/defaultData';
import animalRouter from './src/routes/animal';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/animal', animalRouter)

app.listen(port, () => {
  data()
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});