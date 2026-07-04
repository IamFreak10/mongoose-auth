import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { userRoutes } from './modules/user/user.routes';

const app: Application = express();
app.use(
  cors({
    orgin: true,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users',userRoutes)
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the API');
});

export default app;
