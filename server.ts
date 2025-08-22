import app from '../server';
import { VercelRequest, VercelResponse } from '@vercel/node';

export default (req: VercelRequest, res: VercelResponse) => {
  app(req, res); 
};

import express, { Request, Response } from 'express';
import path from 'path';

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req: Request, res: Response) => {
    res.redirect('/home');
});

import userRouter from './routes/home';
import productsRouter from './routes/products';
import companyRouter from './routes/company';
import pagenotfounderror from './routes/404';
import raininaudio from './routes/rainin-music';

app.use('/home', userRouter);
app.use('/products', productsRouter);
app.use('/company', companyRouter);
app.use('/404', pagenotfounderror);
app.use('/rainin-player', raininaudio);

export default app;
