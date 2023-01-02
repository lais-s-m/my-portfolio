import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;

  > div {
    display: flex;
    text-align: left;
    width: 80%;
  }

  @media (min-width: 758px) {
    margin: 100px 0px 70px 0px;
  }
`;
