import React from 'react';
import renderer from 'react-test-renderer';
import Hello from '^/components/hello';

test('Hello component should match the snapshot', () => {
  const component = renderer.create(<Hello />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
