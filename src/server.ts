import config from './config/index';
import app from './app';
import DB from './db/db';

async function main() {
  try {
    await DB();
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
