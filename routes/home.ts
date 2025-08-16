import * as express from 'express';
import { Request, Response } from 'express';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  let ipAddr = req.ip;
  console.log(`Client IP: ${ipAddr}`);
  console.log('Client:', ipAddr, 'Entered Home')
  res.render('index');
});

module.exports = router;