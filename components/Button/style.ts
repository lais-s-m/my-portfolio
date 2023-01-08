import styled, { css } from 'styled-components';

interface ButtonProps {
  gradient?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  background: var(--dark-brown);

  border-radius: 8px;

  -webkit-box-shadow: 10px 10px 45px -10px rgba(199, 199, 199, 1);
  -moz-box-shadow: 10px 10px 45px -10px rgba(199, 199, 199, 1);
  box-shadow: 10px 10px 45px -10px rgba(199, 199, 199, 1);

  font-weight: 400;
  font-size: 13px;
  line-height: 8px;

  padding: 8px;

  color: white;
  transition: 1s;

  margin: 10px 15px 0px 0px;

  ${(props) => {
    if (props.gradient) {
      return css`
        background: linear-gradient(70deg, var(--blue), var(--pink));
        border: none;
        color: var(--white);
        font-weight: bold;

        &:hover {
          animation-duration: 3s;
          animation-name: wobble;

          @media (min-width: 768px) {
            font-size: 25px;
            transition: 1s;
            padding: 18px 10px 18px 10px;
          }
        }
      `;
    } else {
      return css`
        background: var(--white);
        color: var(--pink);
        border: 0.3px solid var(--pink);

        &:hover {
          background: var(--pink);
          color: var(--white);
          border: 0.3px solid var(--white);
          transition: 1s;
        }
      `;
    }
  }}

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 10px;

    padding: 20px;

    margin: 15px 20px 0px 0px;
  }
`;
