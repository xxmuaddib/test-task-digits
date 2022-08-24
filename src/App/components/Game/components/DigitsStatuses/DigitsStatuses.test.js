import React from 'react';
import { DigitsStatuses } from './DigitsStatuses';
import { shallow } from 'enzyme';

describe('DigitsStatuses', () => {
  it('If 2 digits are correct and 2 incorrect, only 2 X-s should be present', () => {
    const component = shallow(
      <DigitsStatuses input="1256" secretCode="1234" />
    );

    const incorrectAnswers = component.findWhere((node) => {
      return node.type() && node.name() && node.text() === 'X';
    });

    expect(incorrectAnswers.length).toBe(2);
    component.unmount();
  });

  it('If 3 character is filled, 3 X or V should be visible', () => {
    const component = shallow(<DigitsStatuses input="555" secretCode="1234" />);

    const elements = component.findWhere((node) => {
      return node.type() && node.name() && ['X', 'V'].includes(node.text());
    });

    expect(elements.length).toBe(3);
    component.unmount();
  });

  it('If no character is filled, no X or V should be visible', () => {
    const component = shallow(<DigitsStatuses input="" secretCode="1234" />);

    const elements = component.findWhere((node) => {
      return node.type() && node.name() && ['X', 'V'].includes(node.text());
    });

    expect(elements.length).toBe(0);
    component.unmount();
  });
});
