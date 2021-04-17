import { test, expect } from '@jest/globals';
import sum from '../index.js';

test('sum', () => {
  expect(sum(2, 3)).toBe(5);
});
