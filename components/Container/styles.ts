import styled, { css } from 'styled-components';

export interface ContainerProps {
  mainContainer?: boolean;
  workCard?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #ffff;
  border-radius: 15px;

  padding: 25px;

  width: 95vw;

  margin: 0px;

  ${(props) => {
    if (props.mainContainer) {
      return css`
        padding: 50px;
      `;
    }
    if (props.workCard) {
      return css`
        width: 90vw;

        @media (min-width: 1600px) {
          max-width: 700px;
        }
      `;
    }
  }}

  @media (min-width: 768px) {
    margin: 20px;
    padding: 40px;
  }
`;
