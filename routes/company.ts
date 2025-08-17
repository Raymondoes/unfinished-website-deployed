import * as express from 'express';
import { Request, Response } from 'express';
const router = express.Router();
import * as path from 'path';
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'views')));

app.set('view engine', 'ejs');

app.use(express.static('views'));

router.get('/', (req: Request, res: Response) => {
  res.render('company');
});

module.exports = router;

