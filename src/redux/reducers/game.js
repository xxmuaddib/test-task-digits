import { GAME_TYPES } from '../types/game';

const generateSecretCode = () =>
  Math.floor(1000 + Math.random() * 9000)
    .toString()
    .split('');

const createInitialState = () => {
  const secretCode = generateSecretCode();

  return {
    secretCode,
    result: null,
    input: '',
    isGameStarted: true,
  };
};

const initialState = createInitialState();

export const game = (state = initialState, action) => {
  switch (action.type) {
    case GAME_TYPES.START_NEW_GAME:
      return createInitialState();
    case GAME_TYPES.UPDATE_INPUT:
      return {
        ...state,
        result: null,
        input: action.payload,
      };
    case GAME_TYPES.CHECK_ANSWER: {
      const isCorrectAnswer = action.payload === state.secretCode.join('');

      return {
        ...state,
        isGameStarted: false,
        result: isCorrectAnswer,
        input: action.payload,
      };
    }
    default:
      return state;
  }
};
