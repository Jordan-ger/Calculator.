// @ts-nocheck

import { test, expect } from '@jest/globals';
import functions from '../index.js';

test('half', () => {
  expect(functions.half(6)).toBe(3);
});
