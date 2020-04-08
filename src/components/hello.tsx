import React from 'react';
import classnames from 'classnames';

export interface Props {
  compiler: string;
  framework: string;
}

// const wait = async (delay: number) =>
//   // eslint-disable-next-line no-undef
//   new Promise(resolve => {
//     return setTimeout(() => {
//       resolve(console.log('yay'));
//     }, delay);
//   });

// async function doRequests(time: number) {
//   await wait(time);
// }

const Hello: React.FunctionComponent<Props> = ({ compiler, framework }) => {
  const [isRed, setRed] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setRed(!isRed), 5000);
  }, [isRed]);

  React.useEffect(() => {
    return () => console.log('DONE');
  }, []);

  return (
    <h2
      className={classnames('black', {
        red: isRed,
      })}
    >
      Hello from {compiler} and {framework}!
    </h2>
  );
};

export default React.memo(Hello);
