import styled from 'styled-components';

export const StyledButton = styled.button`
  background: var(--dark-brown);

  border: none;
  border-radius: 8px;

  font-weight: 400;
  font-size: 15px;
  line-height: 20px;

  padding: 10px;

  color: white;
  transition: 1s;

  margin-top: 10px;

  &:hover {
    background: var(--dark-brown-pastel);
    transition: 1s;
  }

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 30px;

    padding: 20px;

    margin-top: 15px;
  }
`;
