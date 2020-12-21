import LivroModel from '../models/LivrosModel.js';
class LivroAtualmenteControlller {
  index(req, res) {
    return res.send(LivroModel.livros());
  }
}

export default new LivroAtualmenteControlller();
