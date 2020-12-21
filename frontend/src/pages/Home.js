import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getQueroLer, getConcluido, getLendo } from '../actions';
import axios from '../services/axios';
import CardLivro from '../components/cardLivro';

const Home = ({
  lendo,
  concluido,
  queroLer,
  getQueroLer,
  getConcluido,
  getLendo
}) => {
  useEffect(() => {
    axios.get('/').then(resp => {
      const { data } = resp;
      const arrLendo = [];
      const arrQueroLer = [];
      const arrConcluido = [];
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
    });
  }, []);
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
    <div>
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
    </div>
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
