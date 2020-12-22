import React, { useState } from 'react';
import * as Styled from './style';

const Dropdown = ({ fallbackClickCard = () => {} }) => {
  const [open, setOpen] = useState(false);
  const options = [
    {
      id: 1,
      value: 'lendo',
      texto: 'Lendo Atualmente'
    },
    {
      id: 2,
      value: 'queroLer',
      texto: 'Quero Ler'
    },
    {
      id: 3,
      value: 'concluido',
      texto: 'Leitura concluida'
    },
    {
      id: 4,
      value: 'Nenhum',
      texto: 'Nenhum'
    }
  ];
  return (
    <Styled.Container>
      <Styled.OpenContent onClick={() => setOpen(!open)}>
        Opções
      </Styled.OpenContent>

      <Styled.ContainerContent openContent={open}>
        {options.map((op, index) => (
          <Styled.Texto key={index} onClick={() => fallbackClickCard(op.value)}>
            {op.texto}
          </Styled.Texto>
        ))}
      </Styled.ContainerContent>
    </Styled.Container>
  );
};

export default Dropdown;
