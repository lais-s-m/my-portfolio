import styled from 'styled-components';

export const Card = styled.li`
  width: 100%;

  h4 {
    font-weight: 600;
    font-size: 30px;
    line-height: 44px;
    color: var(--dark-brown);
  }

  @media (min-width: 1440px) {
    width: 45%;
  }
`;
