import pkg from 'express';
import LivroController from '../controllers/LivroControlller.js';
const { Router } = pkg;
const router = new Router();
router.get('/', LivroController.index);
export default router;
