import React from 'react';
import { shallow, mount } from 'enzyme';
import Main, { UnwrappedMain } from '^/components/main';
import MockProvider from '^/helpers/mock-provider';

describe('UnwrappedMain shallow', () => {
  it('renders component', () => {
    const wrapper = shallow(
      <UnwrappedMain loading={true}>
        <p>children</p>
      </UnwrappedMain>,
    );

    console.log(wrapper.debug());
  });
});

describe('UnwrappedMain mount', () => {
  it('renders component', () => {
    const wrapper = mount(
      <UnwrappedMain loading={false}>
        <p>children</p>
      </UnwrappedMain>,
    );

    console.log(wrapper.debug());
  });
});

describe('Main mount', () => {
  it('renders component', () => {
    const wrapper = mount(
      <MockProvider>
        <Main>
          <p>children</p>
        </Main>
      </MockProvider>,
    );

    console.log(wrapper.debug());
  });
});
