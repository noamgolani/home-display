import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = process.env['PORT'] || 4000;

app.get('/', (_req: Request, res: Response) => {
	  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
	  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
