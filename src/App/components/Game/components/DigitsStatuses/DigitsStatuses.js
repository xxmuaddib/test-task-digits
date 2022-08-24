import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

export const DigitsStatuses = ({ input, secretCode }) => (
  <DigitsStatusesContainer>
    {input.split('').map((digit, ind) => (
      <DigitStatus
        key={`${digit}-${ind}`}
        className={cn(
          `animate__animated ${
            secretCode[ind] === digit ? 'animate__tada' : 'animate__wobble'
          }`
        )}
        isCorrectAnswer={secretCode[ind] === digit}
      >
        {secretCode[ind] === digit ? 'V' : 'X'}
      </DigitStatus>
    ))}
  </DigitsStatusesContainer>
);

const DigitsStatusesContainer = styled.div`
  display: flex;
`;

const DigitStatus = styled.div`
  margin: 5px;
  font-weight: bold;
  color: ${(p) => (p.isCorrectAnswer ? 'green' : 'red')};
`;
