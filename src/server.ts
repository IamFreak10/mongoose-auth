import config from './config/index';
import app from './app';
import DB from './db/db';
import { User } from './models/user.model';

async function main() {
  try {
    await DB();
    // const user = await User.create({
    //   name: 'Rahul',
    //   email: 'r@r.com',
    //   age: 20,
    // });

    const allUser=await User.find();

    console.log(allUser);
  } catch (error) {
    console.log(error);
  }
}

main();
