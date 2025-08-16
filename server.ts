import * as express from 'express';
import { Request, Response } from 'express';
import * as path from 'path';
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req: Request, res: Response) => {
    res.redirect('/home');
});

const userRouter = require('./routes/home.js');
const productsRouter = require('./routes/products.js');
const companyRouter = require('./routes/company.js');
const pagenotfounderror = require('./routes/404.js');
const raininaudio = require('./routes/rainin-music.js');

app.use('/home', userRouter);
app.use('/products', productsRouter);
app.use('/company', companyRouter);
app.use('/404', pagenotfounderror);
app.use('/rainin-player', raininaudio);
app.listen(9000);

