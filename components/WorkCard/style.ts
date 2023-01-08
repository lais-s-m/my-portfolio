import styled from 'styled-components';

export const Card = styled.li`
  width: 100%;
  h4 {
    font-weight: 600;
    font-size: 20px;
    line-height: 44px;
    color: var(--blue);

    @media (min-width: 425px) {
      font-size: 22px;
    }

    @media (min-width: 768px) {
      font-size: 30px;
      margin-bottom: 5px;
    }

    @media (min-width: 1024px) {
      font-size: 38px;
      margin-bottom: 15px;
    }
  }
`;
