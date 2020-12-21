import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 5px;
  width: 250px;
  flex-direction: column;
  position: relative;
`;

export const ContainerContent = styled.div`
  display: ${({ openContent }) => (openContent ? 'flex' : 'none')};
  position: absolute;
  top: 25px;
  flex-direction: column;
  background: #ccc;
  width: 100%;
  left: -6px;
  align-items: flex-end;
`;

export const Texto = styled.span`
  display: inline-block;
  font-size: 14px;
  padding: 2px 10px 0;
  :hover {
    font-weight: bold;
  }
  cursor: pointer;
`;

export const OpenContent = styled.div`
  :hover {
    font-weight: bold;
  }
  cursor: pointer;
  display: block;
`;
