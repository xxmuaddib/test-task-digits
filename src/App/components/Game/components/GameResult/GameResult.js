import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { startNewGame } from '../../../../../redux/actions/game';

export const GameResult = ({ result, correctAnswer }) => {
  const [newGameTimer, setNewGameTimer] = useState(5);
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNewGameTimer((newGameTimer) => {
        if (newGameTimer === 1) {
          dispatch(startNewGame());
        }

        return newGameTimer - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <GameResultContainer>
      {result ? (
        <div
          id="result"
          className="animate__animated animate__slideInLeft animate__faster"
        >
          "Congratulations, you win!"
        </div>
      ) : (
        <>
          <div
            id="result"
            className="animate__animated animate__slideInLeft animate__faster"
          >
            Sorry, you're wrong, the correct answer was
          </div>
          <div
            id="correct-answer"
            className="animate__animated animate__zoomInLeft"
          >
            {correctAnswer.join('')}
          </div>
        </>
      )}
      <div className="animate__animated animate__slideInRight animate__faster">
        The new game will start in {newGameTimer}!
      </div>
    </GameResultContainer>
  );
};

const GameResultContainer = styled.div`
  text-align: center;
`;
