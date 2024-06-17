import mongoose from 'mongoose';
import { env } from '../utils/env';
export const initMongoDB = async () => {
  try {
    const user = process.env.MONGODB_USER;
    console.log(user);
    await mongoose.connect(
      'mongodb+srv://dsavontrumpet:Trumpet021090@cluster0.jugcyzq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    );
    console.log('Succesful');
  } catch (error) {
    console.log('Error', error);
  }
};
