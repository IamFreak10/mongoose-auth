import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { toNodeHandler } from 'better-auth/node';
import { userRoutes } from './modules/user/user.routes';
import { getAuth } from './lib/auth';

const app: Application = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.set('trust proxy', true);

//  better-auth-er route express.json() er AGE mount korte hobe
// (better-auth nijer body parsing handle kore)
app.all('/api/auth/*splat', (req, res, next) => {
  const auth = getAuth();
  return toNodeHandler(auth)(req, res);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the API');
});

export default app;
