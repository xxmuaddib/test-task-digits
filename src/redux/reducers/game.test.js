import configureStore from 'redux-mock-store';
import { game } from './game';
import { GAME_TYPES } from '../types/game';

const mockStore = configureStore();

const initialState = {
  secretCode: [1, 2, 3, 4],
  result: null,
  input: '',
  isGameStarted: true,
};

const store = mockStore({
  game: initialState,
});

describe('Dispatches the correct action and payload', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('UPDATE_INPUT', () => {
    const action = {
      payload: 1,
      type: GAME_TYPES.UPDATE_INPUT,
    };

    const expectedState = { ...initialState, input: 1 };

    expect(game(initialState, action)).toEqual(expectedState);
  });

  test('CHECK_ANSWER if correct', () => {
    const action = {
      payload: '1234',
      type: GAME_TYPES.CHECK_ANSWER,
    };

    const expectedState = {
      ...initialState,
      input: '1234',
      result: true,
      isGameStarted: false,
    };

    expect(game(initialState, action)).toEqual(expectedState);
  });

  test('CHECK_ANSWER if wrong', () => {
    const action = {
      payload: '1235',
      type: GAME_TYPES.CHECK_ANSWER,
    };

    const expectedState = {
      ...initialState,
      input: '1235',
      result: false,
      isGameStarted: false,
    };

    expect(game(initialState, action)).toEqual(expectedState);
  });

  test('START_NEW_GAME', () => {
    const action = {
      type: GAME_TYPES.START_NEW_GAME,
    };

    expect(game(initialState, action).secretCode.length).toEqual(4);
  });
});
