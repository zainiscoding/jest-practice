import caesar from './caesar';

//Originally I wrote some of these myself but overwrote them with tests from a previous exercise in WebDev 101

it('works with single letters', () => {
  expect(caesar('A', 1)).toEqual('B');
});
it('works with words', () => {
  expect(caesar('Aaa', 1)).toEqual('Bbb');
});
it('works with phrases', () => {
  expect(caesar('Hello, World!', 5)).toEqual('Mjqqt, Btwqi!');
});
it('works with negative shift', () => {
  expect(caesar('Mjqqt, Btwqi!', -5)).toEqual('Hello, World!');
});
it('wraps', () => {
  expect(caesar('Z', 1)).toEqual('A');
});
it('works with large shift factors', () => {
  expect(caesar('Hello, World!', 75)).toEqual('Ebiil, Tloia!');
});
it('works with large negative shift factors', () => {
  expect(caesar('Hello, World!', -29)).toEqual('Ebiil, Tloia!');
});
