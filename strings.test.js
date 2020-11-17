import capitalize from './capitalize';
import reverse from './reverse';

test('capitalizes first letter', () => {
  expect(capitalize('hey').charAt(0)).toMatch(/[A-Z]/);
});

test('reverses a string', () => {
  expect(reverse('pink')).toBe('knip');
});

test('reverses a string with case sensitivity', () => {
  expect(reverse('PiNk')).toBe('kNiP');
});

test('reverses a string with spaces', () => {
  expect(reverse('pi nk')).toBe('kn ip');
});
