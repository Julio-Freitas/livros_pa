import React from 'react';
import Dropdown from '../dropdown';
import * as Styled from './style';
const CardLivro = ({
  categoria,
  listagem,
  fallbackMoveCard = () => {},
  dropdown = true
}) => {
  return (
    <div className="container mb-5">
      <h1>{categoria}</h1>
      <Styled.ContainerCard>
        {listagem.map((item, index) => (
          <Styled.ContainerCardSingle key={index}>
            <Styled.Image
              src={
                !item.img
                  ? 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
                  : item.img
              }
              alt={item.titulo}
            />
            <Styled.Texto>
              <span>Titulo:</span>
              {item.titulo}
            </Styled.Texto>
            <Styled.Texto>
              <span>Autor:</span>
              {item.autor}
            </Styled.Texto>
            {dropdown && (
              <Dropdown
                fallbackClickCard={categoria =>
                  fallbackMoveCard({ item, categoria })
                }
              />
            )}
          </Styled.ContainerCardSingle>
        ))}
      </Styled.ContainerCard>
    </div>
  );
};

export default CardLivro;
