import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-weight: 800;
  font-size: 20px;
  line-height: 40px;
  width: 120px;
  color: var(--matcha);

  @media (min-width: 425px) {
    font-size: 20px;
    line-height: 40px;
    width: 150px;
  }

  @media (min-width: 768px) {
    font-size: 45px;
    width: 250px;
    line-height: 80px;
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
