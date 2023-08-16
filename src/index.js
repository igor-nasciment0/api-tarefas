import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import tarefasEndpoints from './controller/tarefasController.js'

let servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use(tarefasEndpoints);

servidor.listen(process.env.PORT, () => console.log('API online'));