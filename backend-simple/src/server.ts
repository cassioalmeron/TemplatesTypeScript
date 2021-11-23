import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import routes from './routes';
import errorHandler from './errorHandler';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(process.env.APP_PORT, () =>
  console.log(`Server is running on port ${process.env.APP_PORT}!`),
);
