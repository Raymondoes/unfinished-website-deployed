import * as express from 'express';
import { Request, Response } from 'express';
import * as path from 'path';

const router = express.Router();
const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '..', 'views'));

router.get('/', (req: Request, res: Response) => {
  let ipAddr = req.ip;
  console.log(`Client IP: ${ipAddr}`);
  console.log('Client:', ipAddr, 'Entered Home');
  res.render('index'); 
});

module.exports = router;
