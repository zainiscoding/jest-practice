import calculator from './calculator';

test('adds numbers', () => {
  expect(calculator('+', 3, 2)).toBe(5);
});

test('adds numbers with negatives', () => {
  expect(calculator('+', -5, 1)).toBe(-4);
});

test('adds numbers with 0s', () => {
  expect(calculator('+', 0, 1)).toBe(1);
});

test('subtracts numbers', () => {
  expect(calculator('-', 3, 2)).toBe(1);
});

test('subtracts numbers with negatives', () => {
  expect(calculator('-', -5, 1)).toBe(-6);
});

test('subtracts numbers with 0s', () => {
  expect(calculator('-', 0, 1)).toBe(-1);
});

test('divides numbers', () => {
  expect(calculator('/', 6, 2)).toBe(3);
});

test('divides numbers with negatives', () => {
  expect(calculator('/', -6, 2)).toBe(-3);
});

test('divides numbers with 0s', () => {
  expect(calculator('/', 0, 1)).toBe(0);
});

test('cant divide by 0', () => {
  expect(calculator('/', 1, 0)).toBe(Infinity);
});

test('multiplies numbers', () => {
  expect(calculator('*', 6, 2)).toBe(12);
});

test('multiplies numbers with negatives', () => {
  expect(calculator('*', -6, 2)).toBe(-12);
});

test('multiplies numbers with 0s', () => {
  expect(calculator('*', 0, 1)).toBe(0);
});
