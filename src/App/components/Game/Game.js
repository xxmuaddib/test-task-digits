import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as S from './Game.styles';
import { Input } from '../../../ui/Input';
import { checkAnswer, updateInput } from '../../../redux/actions/game';
import { DigitsStatuses } from './components/DigitsStatuses';
import { GameResult } from './components/GameResult';

export const Game = () => {
  const dispatch = useDispatch();
  const { game } = useSelector((state) => state);

  const onCodeChange = (e) => {
    const code = e.target.value;

    if (code.length === 4) dispatch(checkAnswer(code));
    else dispatch(updateInput(code));
  };

  return (
    <S.GameContainer>
      <S.GameTitle className="animate__animated animate__slideInDown">
        Can you guess the secrets code?
      </S.GameTitle>
      <Input
        id="secret-code-input"
        value={game.input}
        onChange={onCodeChange}
        maxLength={4}
        placeholder="Secret code"
        disabled={!game.isGameStarted}
      />
      {game.secretCode && (
        <DigitsStatuses input={game.input} secretCode={game.secretCode} />
      )}
      {game.result !== null && (
        <GameResult result={game.result} correctAnswer={game.secretCode} />
      )}
    </S.GameContainer>
  );
};
