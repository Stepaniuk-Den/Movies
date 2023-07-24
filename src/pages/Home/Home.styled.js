import styled from 'styled-components';

export const StyledHome = styled.div`
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
  & h1 {
    padding-left: 24px;
  }
`;
