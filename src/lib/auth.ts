import { betterAuth } from 'better-auth';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';
import { mongoose } from '../db/db';
import config from '../config/index';

let authInstance: ReturnType<typeof betterAuth>;

export const getAuth = () => {
  if (!authInstance) {
    const client = mongoose.connection.getClient();
    const db = client.db();

    authInstance = betterAuth({
      database: mongodbAdapter(db), 
      baseURL: config.better_auth_url,
      secret: config.better_auth_secret,
      trustedOrigins: ['http://localhost:5000'],
      emailAndPassword: {
        enabled: true,
      },
    });
  }

  return authInstance;
};
