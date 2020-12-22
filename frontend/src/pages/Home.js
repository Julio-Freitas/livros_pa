import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getQueroLer, getConcluido, getLendo } from '../actions';
import axios from '../services/axios';
import CardLivro from '../components/cardLivro';
import * as Styled from './style';

const Home = ({
  lendo,
  concluido,
  queroLer,
  getQueroLer,
  getConcluido,
  getLendo
}) => {
  const history = useHistory();
  useEffect(() => {
    const _getInitalHome = async () => {
      const arrLendo = [];
      const arrQueroLer = [];
      const arrConcluido = [];
      const { data } = await axios.get('/');
      data.forEach(list => {
        if (list.status === 'lendo') {
          arrLendo.push(list);
        } else if (list.status === 'concluido') {
          arrConcluido.push(list);
        } else {
          arrQueroLer.push(list);
        }
      });
      getLendo(arrLendo);
      getConcluido(arrConcluido);
      getQueroLer(arrQueroLer);
    };
    _getInitalHome();
  }, [getLendo, getConcluido, getQueroLer]);

  const _handleChangeItemLivro = obj => {
    const { item, categoria } = obj;
    let filterLendo = [...lendo];
    let filterQueroLer = [...queroLer];
    let filterConcluido = [...concluido];

    if (item.status === 'lendo') {
      filterLendo = lendo.filter(old => old.id !== item.id);
      getLendo(filterLendo);
    } else if (item.status === 'queroLer') {
      filterQueroLer = queroLer.filter(old => old.id !== item.id);
      getQueroLer(filterQueroLer);
    } else if (item.status === 'concluido') {
      filterConcluido = concluido.filter(old => old.id !== item.id);
      getConcluido(filterConcluido);
    }

    if (categoria === 'lendo') {
      const newArr = [...filterLendo, { ...item, status: categoria }];
      getLendo(newArr);
    } else if (categoria === 'queroLer') {
      const newArr = [...filterQueroLer, { ...item, status: categoria }];
      getQueroLer(newArr);
    } else if (categoria === 'concluido') {
      const newArr = [...filterConcluido, { ...item, status: categoria }];
      getConcluido(newArr);
    }
  };
  return (
    <>
      <Styled.TitleHome>Lista de Leitura</Styled.TitleHome>
      <div className="container">
        <CardLivro
          categoria="Lendo Atualmente"
          listagem={lendo}
          fallbackMoveCard={objeto => _handleChangeItemLivro(objeto)}
        />
        <br />
        <CardLivro
          categoria="Quero Ler"
          listagem={queroLer}
          fallbackMoveCard={objeto => _handleChangeItemLivro(objeto)}
        />
        <br />
        <CardLivro
          categoria="Leitura Concluída"
          listagem={concluido}
          fallbackMoveCard={objeto => _handleChangeItemLivro(objeto)}
        />
        <Styled.SearchContainer onClick={() => history.push('/search')}>
          <i className="fa fa-search"></i>
        </Styled.SearchContainer>
        {console.log(lendo, concluido, queroLer)}
      </div>
    </>
  );
};

const mapStateToProps = store => ({
  lendo: store.clickState.lendo,
  queroLer: store.clickState.queroLer,
  concluido: store.clickState.concluido
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getQueroLer, getConcluido, getLendo }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
