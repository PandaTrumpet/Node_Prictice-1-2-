import mongoose from 'mongoose';
import { StudentsCollection } from '../db/models/studentModel.js';
import { HttpError } from '../utils/HttpError.js';
import { controllerWrapper } from '../utils/controllerWrapper.js';

export const createStudent = async (req, res) => {
  const students = await StudentsCollection.create(req.body);

  res.send(students);
};
export const getStudentById = controllerWrapper(async (req, res) => {
  // console.log(req.params.id);

  const { id } = req.params;
  if (!mongoose.isValidObjectId()) {
    throw HttpError(`Not valid ${id}`, 400);
  }
  const student = await StudentsCollection.findById(id);
  if (!student) {
    throw HttpError('Not found', 404);
  }
  res.send(student);
});
