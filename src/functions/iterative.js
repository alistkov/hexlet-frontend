const smallestDivisor = (num) => {
  if (num === 1) {
    return num;
  }
  const iter = (divisor) => {
    if (num % divisor === 0) {
      return divisor;
    }
    return iter(divisor + 1);
  };
  return iter(2);
};

export default smallestDivisor;
