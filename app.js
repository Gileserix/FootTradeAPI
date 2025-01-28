import express from 'express';
import dotenv from 'dotenv';
import expressLoader from './src/loaders/express.js';
import loaders from './src/loaders/index.js';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const app = express();

expressLoader(app);

/* Lanzo la carga inicial Loaders*/


//Configuracion de los servicios

loaders.init(app);

export default app;