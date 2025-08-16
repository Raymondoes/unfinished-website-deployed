import * as express from 'express';
import { Request, Response } from 'express';
const router = express.Router();
import * as path from 'path';
const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

router.get('/', (req: Request, res: Response) => {
    res.render('rainin-music');
});

router.get('/win-download', (req: Request, res: Response) => {
    res.download('rainindemob37.exe');
});

module.exports = router;
