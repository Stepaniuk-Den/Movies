import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  padding: 0 20px;

  & .thumb {
    width: 300px;
    border-radius: 15px;
    overflow: hidden;
  }

  & .movie-card {
    display: flex;
    gap: 50px;
  }

  & .movie-card-details {
    width: 50%;
  }

  & .goback {
    display: flex;
    justify-content: center;
    text-decoration: none;
    width: 100px;
    margin: 20px 0;
    padding: 5px 10px;
    border: 1px solid grey;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    scale: 1;

    &:hover {
      background-color: #afffff;
      color: #000000;
      scale: 1.1;
      translate: 7px;
      box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),
        0px 1px 5px 0px rgba(0, 0, 0, 0.14),
        0px 2px 5px -1px rgba(0, 0, 0, 0.12);
    }
    &:active {
      scale: 0.9;
    }
  }

  & ul {
    list-style: none;
  }

  @media screen and (max-width: 768px) {
    & .movie-card {
      display: flex;
      flex-direction: column;
      gap: 50px;
    }
  }
`;
export const StyledNavLinkDetails = styled(NavLink)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  width: 100px;
  margin: 20px 0;
  padding: 5px 10px;
  border: 1px solid grey;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  scale: 1;

  &.active {
    background-color: #afffff;
    color: #000000;
  }
  &:hover {
    scale: 1.1;
    background-color: #afffff;
    color: #000000;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),
      0px 1px 5px 0px rgba(0, 0, 0, 0.14), 0px 2px 5px -1px rgba(0, 0, 0, 0.12);
  }
`;
