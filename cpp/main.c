int counter = 100;

int count() {
  return counter += 1;
}

int add(int a, int b){
	return a + b;
}

unsigned int factorial(unsigned int n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}

#define MONTHS 12
#define YEARS 5

float report()
{
  float rain[YEARS][MONTHS] = {
      {4.3, 4.3, 4.3, 3.0, 2.0, 1.2, 0.2, 0.2, 0.4, 2.4, 3.5, 6.6},
      {8.5, 8.2, 1.2, 1.6, 2.4, 0.0, 5.2, 0.9, 0.3, 0.9, 1.4, 7.3},
      {9.1, 8.5, 6.7, 4.3, 2.1, 0.8, 0.2, 0.2, 1.1, 2.3, 6.1, 8.4},
      {7.2, 9.9, 8.4, 3.3, 1.2, 0.8, 0.4, 0.0, 0.6, 1.7, 4.3, 6.2},
      {7.6, 5.6, 3.8, 2.8, 3.8, 0.2, 0.0, 0.0, 0.0, 1.3, 2.6, 5.2}};

  int year, month;
  float subtot, total;

  for (year = 0, total = 0; year < YEARS; year++)
  {
    for (month = 0, subtot = 0; month < MONTHS; month++)
    {
      subtot += rain[year][month];
      total += subtot;
    }
    // int weatherReport[YEARS][MONTHS] = {year, subtot};
    return year;
  }

  for (month = 0; month < MONTHS; month++)
  {
    for (year = 0, subtot = 0; year < YEARS; year++)
      subtot += rain[year][month];
  }

  return 5.6;
}

