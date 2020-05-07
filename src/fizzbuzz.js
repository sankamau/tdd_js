const fizzbuzz = (number) => {
  if (number === 0) return 0;
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizbuzz';
  }
  if (number % 3 === 0) {
    return 'fizz';
  }
  if (number % 5 === 0) {
    return 'buzz';
  }
  return number;
};
export {
  // eslint-disable-next-line import/prefer-default-export
  fizzbuzz,
};
