import styled from 'styled-components';

export const ContainerCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ContainerCardSingle = styled.div`
  display: flex;
  padding: 5px;
  border-radius: 5px;
  width: 250px;
  border: 1px solid;
  flex-direction: column;
  margin: 10px 0;
`;

export const Texto = styled.span`
  display: inline-block;
  font-size: 14px;
`;

export const Image = styled.img`
  max-width: 100%;
  margin-bottom: 5px;
`;
