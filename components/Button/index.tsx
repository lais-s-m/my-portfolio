import { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  gradient?: boolean;
}

const Button: React.FC<ButtonProps> = ({ gradient, children, ...rest }) => (
  <StyledButton gradient={gradient} {...rest}>
    {children}
  </StyledButton>
);

export default Button;
