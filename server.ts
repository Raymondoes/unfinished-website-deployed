import * as express from 'express';
import { Request, Response } from 'express';
import * as path from 'path';
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req: Request, res: Response) => {
    res.redirect('/home');
});

const userRouter = require('./routes/home.ts');
const productsRouter = require('./routes/products.ts');
const companyRouter = require('./routes/company.ts');
const pagenotfounderror = require('./routes/404.ts');
const raininaudio = require('./routes/rainin-music.ts');

app.use('/home', userRouter);
app.use('/products', productsRouter);
app.use('/company', companyRouter);
app.use('/404', pagenotfounderror);
app.use('/rainin-player', raininaudio);
app.listen(3000);


