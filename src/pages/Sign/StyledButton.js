import React from 'react';
import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';

function StyledButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
}

const Button = styled.button`
  margin-bottom: ${({ marginBottom }) => marginBottom || '15px'};
  width: 100%;
  height: 44px;
  font-size: 18px;
  color: ${props => props.color || 'white'};
  border: none;
  ${props => {
    const selected = props.theme.palette[props.backgroundColor || 'gray'];
    return css`
      background: ${selected};
      &:hover {
        cursor: pointer;
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `;
  }}
`;

export default StyledButton;
