import { RomanNumeral } from './roman-numeral';

describe('RomanNumeral', () => {
  let roman = new RomanNumeral();

  it('works with one', () => {
    expect(roman.arabicToRoman(1)).toBe('I');
  });
});
