/* eslint-disable no-console */
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  let dividers = 0;
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      dividers += 1;
    }
  }
  return dividers <= 2;
};

const sayPrimeOrNot = (number) => {
  const message = isPrime(number) ? 'yes' : 'no';
  console.log(message);
};

export default sayPrimeOrNot;
