class LivroModel {
  constructor() {}

  livros() {
    return [
      {
        id: 1,
        img:
          'https://super.abril.com.br/wp-content/uploads/2005/11/romeujulieta.png',
        titulo: 'Romeu e Julieta',
        autor: 'William Shakespeare',
        status: 'lendo'
      },

      {
        id: 2,
        img:
          'data:image/jpeg;base64,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',
        titulo: ' Os Irmãos Karamázov ',
        autor: 'Fiódor Dostoiévski',
        status: 'lendo'
      },
      {
        id: 3,
        img:
          'https://cdn.folhape.com.br/upload/dn_arquivo/2020/08/1598207849.jpg',
        titulo: 'Dom Quixote',
        autor: 'Jorge Luís Borges',
        status: 'lendo'
      },
      {
        id: 4,
        img:
          'https://www.coladaweb.com/wp-content/uploads/2014/12/20160316-o-processo.jpg',
        titulo: 'O Processo',
        autor: 'Franz Kafka',
        status: 'queroLer'
      },
      {
        id: 5,
        img:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQszwIiLSfsT1GocVIdkTD_S9FT9bQ16pur6NsznPae-T2IUwq5_Z8KrPsN2eXfb9-XIF9fzw8oYROALVIfGZkEz19yrZnxtmH2Lg&usqp=CAU&ec=45750089',
        titulo: 'A Terceira Resignação',
        autor: 'Gabriel García Márquez',
        status: 'queroLer'
      },
      {
        id: 6,
        img: 'https://m.media-amazon.com/images/I/51dITISjqBL.jpg',
        titulo: 'O Malefício da Mariposa',
        autor: 'Federico García Lorca',
        status: 'queroLer'
      },
      {
        id: 7,
        img:
          'https://image.isu.pub/170410015203-acd90c8706410721ad4292c69d1e34de/jpg/page_1_thumb_large.jpg',
        titulo: 'Quarenta Dias',
        autor: 'Maria Valéria Rezende',
        status: 'concluido'
      },
      {
        id: 8,
        img:
          'https://images-na.ssl-images-amazon.com/images/I/91E4EolYJJL._AC_SY741_.jpg',
        titulo: 'Como se Estivéssemos em Palimpsesto de Putas',
        autor: 'Elvira Vigna',
        status: 'concluido'
      },
      {
        id: 9,
        img:
          'https://images-na.ssl-images-amazon.com/images/I/61sQuGTjTkL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
        titulo: 'Nunca Houve um Castelo',
        autor: 'Martha Batalha',
        status: 'concluido'
      }
    ];
  }
}

export default new LivroModel();
