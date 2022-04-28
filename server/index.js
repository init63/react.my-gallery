import 'dotenv/config';
import sequelize from './db.js';
import {Image} from './models/models.js';
import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({message: 'WORKING'});
});

const startApp = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

startApp();
