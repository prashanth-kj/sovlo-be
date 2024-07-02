import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import AppRoutes from './src/routes/index.js'
dotenv.config();

const PORT= process.env.PORT;

const app= express();
  app.use(express.json());
  app.use(cors());
  app.use(express.static("Public"))
  app.use('/', AppRoutes);

  app.listen(PORT, ()=>console.log(`App is listening PORT ${PORT}`))

  