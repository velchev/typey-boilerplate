int counter = 100;

int count() {
  return counter += 1;
}

int add(int a, int b){
	return a + b + 100;
}

unsigned int factorial(unsigned int n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}

