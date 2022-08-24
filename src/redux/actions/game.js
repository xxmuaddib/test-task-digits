import { GAME_TYPES } from '../types/game';

export const updateInput = (code) => ({
  type: GAME_TYPES.UPDATE_INPUT,
  payload: code,
});

export const checkAnswer = (payload) => ({
  type: GAME_TYPES.CHECK_ANSWER,
  payload,
});

export const startNewGame = () => ({
  type: GAME_TYPES.START_NEW_GAME,
});
