const wasm = fetch('../cpp/main.wasm')
  .then(response => response.arrayBuffer())
  .then(buffer => WebAssembly.compile(buffer))
  .then(module => {
    const dependencies = {
      global: {},
      env: {},
    };
    const instance = new WebAssembly.Instance(module, dependencies);
    // console.log(instance.exports);

    const wasm: Record<string, any> = instance.exports;
    // console.log('factorial function result is : ' + wasm.factorial(3));
    return wasm;
  });

const factorial = async (n: number) =>
  await wasm
    .then((value: Record<string, any>) => {
      return value.factorial(n);
    })
    .then(result => result);

const add = async (m: number, n: number) =>
  await wasm.then((value: Record<string, any>) => {
    return value.add(m, n);
  });

export { factorial, add };
