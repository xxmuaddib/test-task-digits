import React from 'react';
import { Game } from './Game';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);

describe('Game', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      game: {
        secretCode: [1, 2, 3, 4],
        result: null,
        input: '',
        isGameStarted: true,
      },
    });

    component = mount(
      <Provider store={store}>
        <Game />
      </Provider>
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component).toMatchSnapshot();
  });
});
