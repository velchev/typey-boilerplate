## https://dassur.ma/things/c-to-webassembly/

# clang --target=wasm32 -emit-llvm -c -S main.c

## The hard way
# llc -march=wasm32 -filetype=obj main.ll
# wasm-objdump -x main.o
# wasm-ld --no-entry --export-all -o main.wasm main.o

## Less hard way
# clang --target=wasm32 -nostdlib -Wl,--no-entry -Wl,--export-all -o main.wasm main.c

## Optimised

all:
	clang --target=wasm32 -O3 -flto -nostdlib -Wl,--no-entry -Wl,--export-all -Wl,--lto-O3 -o main.wasm main.c

clean:
	rm -rf main.wasm
