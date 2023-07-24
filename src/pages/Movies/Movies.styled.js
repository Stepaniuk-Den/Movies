import styled from 'styled-components';
export const StyledMovies = styled.div`
  margin: 20px auto;
  padding: 0 20px;

  & ul {
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
  }
  & input {
    font-size: 16px;
    padding: 5px 10px;
    border: 1px solid grey;
    border-radius: 10px;
  }

  & button {
    margin-left: 10px;
    padding: 5px 10px;
    border: 1px solid transparent;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    scale: 1;

    &:hover {
      background-color: #afffff;
      color: #000000;
      scale: 1.1;
      box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),
        0px 1px 5px 0px rgba(0, 0, 0, 0.14),
        0px 2px 5px -1px rgba(0, 0, 0, 0.12);
    }
    &:active {
      scale: 0.9;
    }
  }
`;
