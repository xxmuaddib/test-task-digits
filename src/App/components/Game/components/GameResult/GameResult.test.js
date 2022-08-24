import React from 'react';
import { GameResult } from './GameResult';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('GameResult', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      game: {
        secretCode: '1234',
        result: null,
        input: '',
        isGameStarted: true,
      },
    });
  });

  it('Correct answer triggers congratulations', () => {
    component = mount(
      <Provider store={store}>
        <GameResult result={true} correctAnswer="1234" />
      </Provider>
    );

    const result = component.find('#result');

    expect(result.text()).toContain('Congratulations');
    component.unmount();
  });

  it('Incorrect answer triggers congratulations', () => {
    component = mount(
      <Provider store={store}>
        <GameResult result={false} correctAnswer={[1, 2, 3, 4]} />
      </Provider>
    );
    const result = component.find('#result');

    expect(result.text()).toContain('Sorry');
    component.unmount();
  });

  it('On incorrect answer the correct answer should be shown', () => {
    const correctAnswer = [1, 2, 3, 4];

    component = mount(
      <Provider store={store}>
        <GameResult result={false} correctAnswer={correctAnswer} />
      </Provider>
    );
    const correctAnswerDiv = component.find('#correct-answer');

    expect(correctAnswerDiv.text()).toContain(correctAnswer.join(''));
    component.unmount();
  });
});
