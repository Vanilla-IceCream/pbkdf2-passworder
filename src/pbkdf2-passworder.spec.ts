import { test, expect } from 'vitest';

import pbkdf2 from './pbkdf2-passworder';

test('isMatch -> true', async () => {
  const password = '123456';
  const hashedPassword = await pbkdf2.hash(password);

  const inputPassword = '123456';
  const isMatch = await pbkdf2.compare(inputPassword, hashedPassword);

  expect(isMatch).toBe(true);
});

test('isMatch -> false', async () => {
  const password = '123456';
  const hashedPassword = await pbkdf2.hash(password);

  const inputPassword = 'qwerty';
  const isMatch = await pbkdf2.compare(inputPassword, hashedPassword);

  expect(isMatch).toBe(false);
});
