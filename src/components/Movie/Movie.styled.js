import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMovie = styled.li`
  display: flex;
  flex-direction: column;
  width: 360px;
  margin: 20px;
  border-radius: 15px;
  overflow: hidden;
  background-color: #afffff;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
    background-color: #ffffff;
  }
`;
export const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-decoration: none;

  & img {
    width: 100%;
  }

  & p {
    padding-left: 10px;
    color: black;
  }
`;
