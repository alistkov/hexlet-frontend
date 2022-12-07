import { ParseError, parseJson } from '../../src/introduction-to-oop/exceptions.js';

test('testing parse json', () => {
  const json = '{ "key": "value" }';
  expect(parseJson(json)).toEqual({ key: 'value' });
});

test('testing parse invalid json', () => {
  const json = '{ key": "value" }';
  expect(() => parseJson(json)).toThrow(ParseError);
});
