import React from 'react';
import { factorial, add } from 'wasm-lib';

const App = () => {
  const [factor, setFactorial] = React.useState<any>();
  const [addition, setAddition] = React.useState<any>();

  React.useEffect(() => {
    const getFactorial = async () => {
      setFactorial(await factorial(5));
    };
    getFactorial();

    const getAddition = async () => {
      setAddition(await add(5, 3));
    };
    getAddition();
  }, []);

  return (
    <>
      {factor ? <p>factorial {factor}</p> : <p>Loading...</p>}
      {addition ? <p>addition {addition}</p> : <p>Loading...</p>}
    </>
  );
};

export default App;

// import React from 'react';

// import Main from '^/components/main';
// import Hello from '^/components/hello';

// const App: React.FunctionComponent<{}> = () => (
//   <Main>
//     <Hello compiler="TypeScript" framework="React" />
//   </Main>
// );

// export default React.memo(App);
