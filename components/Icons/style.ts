import styled, { keyframes } from 'styled-components';
import { tada } from 'react-animations';

const tadaAnimation = keyframes`${tada}`;

export const Icons = styled.a`
  &:hover {
    animation: 1s ${tadaAnimation};
  }
`;
