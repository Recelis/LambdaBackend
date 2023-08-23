'use strict'
import express, { Application, Request, Response } from 'express';


const app: Application = express();


app.get('/', (req: Request, res: Response) => {
  res.send('Successful response.');
});

export default app