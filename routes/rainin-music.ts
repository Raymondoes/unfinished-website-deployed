import * as express from 'express';
import { Request, Response } from 'express';
const router = express.Router();
import * as path from 'path';
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'views')));

router.get('/', (req: Request, res: Response) => {
    res.render('rainin-music');
});

router.get('/win-download', (req: Request, res: Response) => {
    res.send('https://www.mediafire.com/file/10yvrrelb6oeqfk/Rainin'+Demo+Installer.exe/file');
});

module.exports = router;
