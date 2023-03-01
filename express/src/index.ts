import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = process.env['PORT'] || 3000;

app.get('/', (_req: Request, res: Response) => {
	  res.send('Express + TypeScript Server');
});

app.get('/display', (_req: Request, res: Response) => {
	  res.send('Display');
});

app.listen(port, () => {
	  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
