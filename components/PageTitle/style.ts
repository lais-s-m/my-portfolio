import styled from 'styled-components';

export const PageTitle = styled.h3`
  font-weight: 800;
  font-size: 28px;
  text-align: left;
  color: var(--dark-brown-pastel);

  @media (min-width: 768px) {
    font-size: 55px;
    line-height: 80px;
    margin-top: 50px;
  }
  @media (min-width: 1024px) {
    font-size: 70px;
    line-height: 90px;
  }
  @media (min-width: 1440px) {
    font-size: 100px;
    line-height: 116px;
  }
`;
