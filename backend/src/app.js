import express from 'express';
import cors from 'cors';
import livroRouter from './routes/LivroAtualmenteRoutes.js';

class App {
  constructor() {
    this.app = express();
    this.routes();
  }

  routes() {
    this.app.use(cors());
    this.app.use('/', livroRouter);
  }
}

export default new App().app;
