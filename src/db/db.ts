import mongoose from 'mongoose';
import config from '../config/index';
const DB = async () => {
  try {
    await mongoose.connect(config.db_url as string);
    console.log('Connected to MongoDB');
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export default DB;
