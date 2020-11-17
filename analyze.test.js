import analyze from './analyze';

it('returns correct average', () => {
  expect(analyze([2, 2, 2]).average).toBe(2);
});

it('returns correct average', () => {
  expect(analyze([2, 5, 8, 22]).average).toBe(9.25);
});

it('returns correct average with negatives', () => {
  expect(analyze([2, 5, 8, -22]).average).toBe(-1.75);
});

it('returns minimum number', () => {
  expect(analyze([2, 1, 5]).min).toBe(1);
});

it('returns minimum number with negatives', () => {
  expect(analyze([-5, 0, 100]).min).toBe(-5);
});

it('returns max number', () => {
  expect(analyze([2, 1, 5]).max).toBe(5);
});

it('returns max number with negatives', () => {
  expect(analyze([-5, 0, 100]).max).toBe(100);
});

it('returns length', () => {
  expect(analyze([1, 2, 3]).length).toBe(3);
});

it('returns long lengths', () => {
  expect(
    analyze([
      1,
      2,
      3,
      2,
      3,
      2,
      3,
      2,
      3,
      5,
      1,
      2,
      3,
      2,
      3,
      2,
      3,
      2,
      3,
      5,
      1,
      2,
      3,
      2,
      3,
      2,
      3,
      2,
      3,
      5,
      1,
      2,
      3,
      2,
      3,
      2,
      3,
      2,
      3,
      5,
    ]).length
  ).toBe(40);
});
