import React from 'react';
import { Input } from './Input';
import { mount } from 'enzyme';

const onChangeEvent = jest.fn();

describe('Input', () => {
  it('Onchange should be called everytime key some change is done in the input', () => {
    const component = mount(<Input onChange={onChangeEvent} />);

    const input = component.find('input');
    input.simulate('focus');
    input.simulate('change', { target: { value: 'f' } });
    input.simulate('change', { target: { value: 'fo' } });
    input.simulate('change', { target: { value: 'foo' } });
    input.simulate('keyDown', {
      which: 27,
      target: {
        blur() {
          input.simulate('blur');
        },
      },
    });
    expect(onChangeEvent).toHaveBeenCalledTimes(3);
    component.unmount();
  });
});
