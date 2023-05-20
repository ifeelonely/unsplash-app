import { describe, it } from 'vitest';
import {
  validName,
  validRadio,
  validQuantity,
  validDate,
} from '../CardFormValid';

describe('Valid function', () => {
  it('Correct value name', () => {
    expect(validName('Alexander')).toBe(true);
  });
  it('InCorrect value name', () => {
    expect(validName('sdf')).toBe(false);
  });
  it('Correct value radio', () => {
    expect(validRadio('String')).toBe(true);
  });
  it('Correct value quantity', () => {
    expect(validQuantity('5')).toBe(true);
  });
  it('Correct value date', () => {
    expect(validDate('23.02.2012')).toBe(true);
  });
});
