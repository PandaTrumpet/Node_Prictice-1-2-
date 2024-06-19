import express from 'express';
import { createStudent } from '../controllers/studentsController.js';
const studentsRouter = express.Router();
studentsRouter.get('/');
studentsRouter.get('/:id');
studentsRouter.post('/', createStudent);
export default studentsRouter;
