import React from 'react';
import styled from 'styled-components';

export const Input = ({ ...rest }) => (
  <InputContainer>
    <StyledInput {...rest} />
  </InputContainer>
);

const InputContainer = styled.div`
  width: 100%;
`;

const StyledInput = styled.input`
  width: calc(100% - 30px);
  padding: 10px 15px;
  border-radius: 10px;
  border: 2px solid #ccc;
  background: #000;
  color: #fff;
`;
