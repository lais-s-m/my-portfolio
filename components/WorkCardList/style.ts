import styled from 'styled-components';

export const CardList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;

  margin-bottom: 50px;

  a + a {
    margin-left: 8px;
  }

  button {
    margin-bottom: 8px;
  }

  @media (max-width: 320px) {
    h4 {
      font-size: 18px;
    }
    button {
      font-size: 12px;
      padding: 5px;
      margin-bottom: 10px;
    }
  }
`;
