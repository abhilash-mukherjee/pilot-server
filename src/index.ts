import express, { Request, Response } from 'express';
const app = express();
app.get('/hello-world', (req: Request, res: Response) => {
  console.log(req.headers);
  res.send('Hello, World!');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
