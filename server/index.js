import 'dotenv/config';
import sequelize from './db.js';
import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import router from './routes/index.js';
import path from 'path';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(path.dirname(''), 'static')));
app.use(fileUpload({}));
app.use('/api', router);

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
