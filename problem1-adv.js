const multipleOfThree = (number) => {
  if (number === 0) {
    return true;
  }
  if (number === 1 || number === 2) {
    return false;
  }
  if (number < 0) {
    return multipleOfThree(number + 3);
  }
  return multipleOfThree(number - 3);
};
