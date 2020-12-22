import styled from 'styled-components';

export const TitleHome = styled.h1`
  font-size: 45px;
  text-align: center;
  padding: 20px;
  border-bottom: 1px #ccc solid;
`;

export const SearchContainer = styled.div`
  font-size: 45px;
  display: flex;
  padding-bottom: 10px;
  justify-content: flex-end;
  .fa-search {
    :hover {
      cursor: pointer;
      color: rebeccapurple;
    }
  }
`;

export const SearchHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 25px;
  border-bottom: 1px #ccc solid;
  align-items: center;
  .fa-arrow-left {
    font-size: 30px;
    :hover {
      cursor: pointer;
      color: rebeccapurple;
    }
  }
  input {
    height: 30px;
    width: 350px;
    border-radius: 3px;
    text-indent: 5px;
  }
  input::placeholder {
    font-size: 16px;
  }
`;

export const TextSearch = styled.span`
  padding: 0 15px;
  font-size: 30px;
`;
