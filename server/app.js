import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import cors from 'cors';

import imagesRoutes from './routes/images.js'
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use('/images', imagesRoutes)
const CONN_URL = 'mongodb+srv://<>@cluster0-puk9a.mongodb.net/shared_images?retryWrites=true&w=majority';
const port = process.env.PORT || 3300;

mongoose.connect(CONN_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => console.log(`Server Running on http://localhost:${port}`)))
  .catch((error) => console.log(`${error} did not connect`));

  mongoose.set('useFindAndModify', false);