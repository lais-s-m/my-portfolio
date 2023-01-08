import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-weight: 800;
  font-size: 45px;
  line-height: 40px;
  width: 120px;
  color: var(--pink);

  @media (min-width: 425px) {
    font-size: 50px;
    line-height: 40px;
  }

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 50px;
    width: 100px;
  }

  @media (min-width: 1024px) {
    font-size: 70px;
    width: 400px;
    line-height: 90px;
  }

  @media (min-width: 1440px) {
    font-size: 100px;
    width: 700px;
    line-height: 116px;
  }
`;
