import { jest } from '@jest/globals';
import sayPrimeOrNot from '../../src/functions/pure-functions.js';

beforeEach(() => {
  console.log = jest.fn();
});

describe('should be prime', () => {
  const numbers = [2, 3, 19, 23, 47, 5, 7, 13];

  test.each(numbers)('check with %i', (num) => {
    sayPrimeOrNot(num);
    expect(console.log).toHaveBeenLastCalledWith('yes');
  });
});

describe('should not be prime', () => {
  const numbers = [49, 8, 4, 1, 0, -3, 9, 25];

  test.each(numbers)('check with number %i', (num) => {
    sayPrimeOrNot(num);
    expect(console.log).toHaveBeenLastCalledWith('no');
  });
});
