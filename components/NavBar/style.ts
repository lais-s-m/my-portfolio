import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: right;

  width: 100%;
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
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;

      border: none;
      background: none;

      a {
        color: var(--light-dark);

        h4 {
          background-image: linear-gradient(70deg, var(--blue), var(--pink));
          background-size: 100%;
          -webkit-background-clip: text;
          -moz-background-clip: text;
          -webkit-text-fill-color: transparent;
          -moz-text-fill-color: transparent;

          transition: 1s;

          &:hover {
            font-size: 20px;

            @media (min-width: 768px) {
              font-size: 23px;
              transition: 1s;
            }
          }
        }

        &:hover {
          color: var(--blue);
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
