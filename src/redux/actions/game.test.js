import configureStore from 'redux-mock-store';
import { updateInput, checkAnswer, startNewGame } from './game';
import { GAME_TYPES } from '../types/game';

const mockStore = configureStore();
const store = mockStore({
  game: {
    secretCode: '1234',
    result: null,
    input: '',
    isGameStarted: true,
  },
});

describe('Dispatches the correct action and payload', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('UPDATE_INPUT', () => {
    const expectedActions = [
      {
        payload: 1,
        type: GAME_TYPES.UPDATE_INPUT,
      },
    ];

    store.dispatch(updateInput(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('CHECK_ANSWER', () => {
    const expectedActions = [
      {
        payload: 1234,
        type: GAME_TYPES.CHECK_ANSWER,
      },
    ];

    store.dispatch(checkAnswer(1234));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('START_NEW_GAME', () => {
    const expectedActions = [
      {
        type: GAME_TYPES.START_NEW_GAME,
      },
    ];

    store.dispatch(startNewGame(1));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
