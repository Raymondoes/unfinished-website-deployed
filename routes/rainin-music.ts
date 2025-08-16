import * as express from 'express';
import { Request, Response } from 'express';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.render('rainin-music');
});

router.get('/win-download', (req: Request, res: Response) => {
    res.download('rainindemob37.exe');
});

module.exports = router;