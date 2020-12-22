import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllLivro } from '../actions';
import axios from '../services/axios';
import CardLivro from '../components/cardLivro';

import * as Styled from './style';

const Serach = ({ todosLivros, getAllLivro }) => {
  const [searchLivro, setSearchLivro] = useState(null);
  const [resultSerach, setResultSerach] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const _getAllLivros = async () => {
      const { data: livros } = await axios.get('/');
      getAllLivro(livros);
    };
    _getAllLivros();
  }, [getAllLivro]);

  useEffect(() => {
    if (!!searchLivro) {
      const newListLIvro = todosLivros.filter(livro => {
        return (
          livro.titulo.toLocaleLowerCase().trim() ===
          searchLivro.toLocaleLowerCase().trim()
        );
      });
      setResultSerach(newListLIvro);
    } else {
      setResultSerach([]);
    }
  }, [searchLivro, todosLivros]);
  return (
    <>
      <Styled.SearchHeader>
        <i className="fa fa-arrow-left" onClick={() => history.push('/')} />
        <Styled.TextSearch>Buscar Livros </Styled.TextSearch>

        <input
          type="text"
          placeholder="Qual livro você está buscando"
          value={searchLivro}
          onChange={e => setSearchLivro(e.target.value)}
        />
      </Styled.SearchHeader>

      {resultSerach.length > 0 && (
        <CardLivro
          categoria={`Sua busca foi: ${searchLivro}`}
          listagem={resultSerach}
          dropdown={false}
        />
      )}
      <CardLivro
        categoria="Todos os livros"
        listagem={todosLivros}
        dropdown={false}
      />
    </>
  );
};

const mapStateToProps = state => ({
  todosLivros: state.clickState.todosLivros
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getAllLivro }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Serach);
