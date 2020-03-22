const getWasmArray = () => {
  if ('WebAssembly' in window) {
    fetch('../cpp/main.wasm')
      .then(response => response.arrayBuffer())
      .then(buffer => WebAssembly.compile(buffer))
      .then(module => {
        const dependencies = {
          global: {},
          env: {},
        };
        const instance = new WebAssembly.Instance(module, dependencies);
        console.log(instance.exports);

        const wasm: any = instance.exports;
        console.log('count function result is : ' + wasm.count());
        console.log('count function result is : ' + wasm.count());
        console.log('add function result is : ' + wasm.add(1, 41));
        console.log('factorial function result is : ' + wasm.factorial(9));
        console.log('report function result is : ' + wasm.report());
      });
  } else {
    console.log(
      "Your browser doesn't support Web Assembly. You may need " +
        "to enable it in your browser's flags.",
    );
  }
};

export { getWasmArray };
