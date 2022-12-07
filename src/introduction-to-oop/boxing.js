const magic = (...numbers) => {
  const sum = numbers.reduce((res, number) => res + number, 0);
  const inner = (...args) => magic(sum, ...args);
  inner.valueOf = () => sum;
  return inner;
};

export default magic;
