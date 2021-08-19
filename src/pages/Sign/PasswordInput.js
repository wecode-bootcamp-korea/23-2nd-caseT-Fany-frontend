import React from 'react';
import { lighten } from 'polished';
import styled from 'styled-components';

function PasswordInput({ children, ...rest }) {
  return <StyledInput {...rest}>{children}</StyledInput>;
}

const StyledInput = styled.input`
  border: none;
  width: 100%;
  height: 44px;
  margin-bottom: 25px;
  background-color: ${lighten(0.4, 'gray')};
  text-indent: 15px;
  font-size: 17px;
`;

export default PasswordInput;
