import React from 'react';
import { shallow } from 'enzyme';
import Main from './main';

describe('Main', () => {
  it('renders a <main>', () => {
    const wrapper = shallow(
      <Main>
        <p>children</p>
      </Main>,
    );

    expect(wrapper.type()).toBe('main');
  });
});
