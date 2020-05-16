import React from 'react';
import classnames from 'classnames';
// import Slider from 'bo-slider';
import '../web-socket';

export interface Props {
  compiler: string;
  framework: string;
}

const wait = (
  delay: number,
  param: boolean,
  callback: (param: boolean) => void,
) =>
  // eslint-disable-next-line no-undef
  new Promise(resolve => {
    return setTimeout(() => {
      resolve(callback(param));
    }, delay);
  });

async function doRequests(
  time: number,
  param: boolean,
  callback: (param: boolean) => void,
) {
  await wait(time, param, callback);
}

const Hello: React.FunctionComponent<Props> = ({ compiler, framework }) => {
  const [isRed, setRed] = React.useState(false);
  const [isGreen, setGreen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setRed(true), 2000);
  }, []);

  React.useEffect(() => {
    doRequests(2200, true, setGreen);
  }, []);

  React.useEffect(() => {
    return () => console.log('DONE');
  }, []);

  return (
    <>
      <h2>
        Hello from{' '}
        <span
          className={classnames({
            red: isRed,
          })}
        >
          {compiler}
        </span>{' '}
        and{' '}
        <span
          className={classnames({
            green: isGreen,
          })}
        >
          {framework}
        </span>
        !
      </h2>
      {/* <Slider /> */}
    </>
  );
};

export default React.memo(Hello);
