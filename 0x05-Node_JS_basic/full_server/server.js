import express from 'express';
import router from './routes/index';

const app = express();

app.use(router);

app.get('/', (req, resp) => {
  resp.status(200).send(req.greeting);
});

app.get('/students', (req, resp) => {
  resp.status(200).send(req.resText);
});

app.get('/students/:major', (req, resp) => {
  resp.status(200).send(req.resText);
});

app.listen(1245);

export default app;
