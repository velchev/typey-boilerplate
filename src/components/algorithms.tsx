import React from 'react';

import { bubbleSort } from 'js-algorithms-lib';

const Algorithms: React.FunctionComponent = () => (
  <ul>
    <li>
      Bubble Sort:{' '}
      {bubbleSort([20, 43, 1, 5, 3, 50]).map((item: number) => `${item}, `)}
    </li>
  </ul>
);

export default React.memo(Algorithms);
