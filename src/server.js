import express from 'express';
import { env } from './utils/env.js';
import studentsRouter from './routers/studentsRouter.js';
export const setupServer = () => {
  const app = express();
  const PORT = Number(env('PORT', '3000'));
  app.use(express.json);
  app.use('/students', studentsRouter);

  app.listen(PORT, () => {
    console.log('Success port!');
  });
};
