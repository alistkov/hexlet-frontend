import fs from 'fs';
import { jest } from '@jest/globals';
import print from '../../src/asynchronous-programming/asynchronous-code.js';

test('readFile', () => {
  const results = [];
  const { log } = console;
  console.log = jest.fn((...args) => {
    results.push(...args);
    log(...args);
  });
  print('__tests__/asynchronous-programming/asynchronous-code.test.js');

  return new Promise((done) => {
    setTimeout(() => {
      const expected = [fs.readFileSync('__tests__/asynchronous-programming/asynchronous-code.test.js', 'utf-8')];
      expect(results).toEqual(expected);
      done();
    }, 2000);
  });
});
