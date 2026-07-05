import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });

const config = {
  port: process.env.PORT || 5000,
  db_url: process.env.DATABASE_URL,
  better_auth_url: process.env.BETTER_AUTH_URL,
  better_auth_secret: process.env.BETTER_AUTH_SECRET,
};

export default config;
