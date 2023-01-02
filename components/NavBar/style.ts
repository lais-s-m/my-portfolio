import styled, { keyframes } from 'styled-components';
import { tada } from 'react-animations';

const tadaAnimation = keyframes`${tada}`;

export const Icons = styled.a`
  &:hover {
    animation: 1s ${tadaAnimation};
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  position: fixed;
  top: 0%;
  left: 1%;
  z-index: 2;
  background-color: var(--bege);

  width: 100vw;
  height: 60px;
  color: var(--dark-brown);

  gap: 10px;

  h1 {
    display: none;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    gap: 10px;

    button {
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;

      border: none;
      background: none;

      a {
        color: var(--dark-brown);

        &:hover {
          color: var(--dark-brown-pastel);
          transition: 0.5s;
        }
      }
    }

    .navbar-icons {
      cursor: pointer;
      font-size: 25px;
      color: var(--dark-brown);
      transition: 0.5s;

      &:hover {
        color: var(--dark-brown-pastel);
        transition: 0.5s;
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 100px;

    h1 {
      display: flex;
    }

    div {
      gap: 30px;

      button {
        font-size: 20px;
      }

      .navbar-icons {
        font-size: 40px;
      }
    }
  }

  @media (min-width: 1440px) {
    right: 10%;
    height: 120px;

    h1 {
      font-size: 26px;
    }

    div {
      gap: 40px;

      button {
        font-size: 22px;
      }

      .navbar-icons {
        font-size: 45px;
      }
    }
  }
`;
