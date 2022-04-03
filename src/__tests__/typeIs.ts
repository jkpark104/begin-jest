import { typeIs } from '../utils/typeIs';

test(`{} 타입은 'object' 이다.`, () => {
  const data = {};
  expect(typeIs(data)).toBe('object');
});

test(`[] 타입은 'array' 이다.`, () => {
  const data: unknown[] = [];
  expect(typeIs(data)).toBe('array');
});

test(`null 타입은 'null' 이다.`, () => {
  const data = null;
  expect(typeIs(data)).toBe('null');
});
