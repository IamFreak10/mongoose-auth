import config from './config/index';
import app from './app';
import connectDB from './db/db';

async function main() {
  try {
    await connectDB();
    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
