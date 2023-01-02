import styled from 'styled-components';

export const TextField = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  width: 100%;

  color: var(--matcha);

  a {
    color: var(--matcha);
    font-weight: 600;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 44px;
    text-align: justify;
  }
`;
