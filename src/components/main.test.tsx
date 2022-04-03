import React from 'react';
import { shallow, mount } from 'enzyme';
import Main, { UnwrappedMain } from '^/components/main';
import MockProvider from '^/helpers/mock-provider';
import { StoreState } from '^/types';
import { mockStore } from '^/helpers/mock-store';

describe('UnwrappedMain shallow', () => {
  it('renders loading icon', () => {
    const wrapper = shallow(
      <UnwrappedMain loading={true}>
        <p>children</p>
      </UnwrappedMain>,
    );

    expect(wrapper.find('img')).toBeDefined();
  });
});

describe('UnwrappedMain mount', () => {
  it('renders header, footer and children', () => {
    const Children = () => <p>children</p>;

    const wrapper = mount(
      <UnwrappedMain loading={false}>
        <Children />
      </UnwrappedMain>,
    );

    expect(wrapper.find('header')).toBeDefined();
    expect(wrapper.find('footer')).toBeDefined();
    expect(wrapper.find(<Children />)).toBeDefined();
  });
});

describe('Main mount', () => {
  it('renders ref as null', () => {
    const store = (initialStore: Partial<StoreState>) =>
      mockStore(initialStore);

    const wrapper = mount(
      <MockProvider store={store({})}>
        <Main>
          <p>children</p>
        </Main>
      </MockProvider>,
    );

    expect(wrapper.prop('children').ref).toBeNull();
  });
});
