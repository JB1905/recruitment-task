import { getRandomNumber } from './getRandomNumber';

describe('getRandomNumber', () => {
  it('returns an integer', () => {
    const result = getRandomNumber();

    expect(Number.isInteger(result)).toBe(true);
  });

  it('returns a value within [0, 1_000_000)', () => {
    const result = getRandomNumber();

    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(1_000_000);
  });

  it('applies Math.floor to Math.random scaled to 1_000_000', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.5);
    expect(getRandomNumber()).toBe(500_000);
    jest.restoreAllMocks();
  });

  it('returns 0 when Math.random returns 0', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0);
    expect(getRandomNumber()).toBe(0);
    jest.restoreAllMocks();
  });

  it('returns 999_999 when Math.random returns just below 1', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.9999999);
    expect(getRandomNumber()).toBe(999_999);
    jest.restoreAllMocks();
  });
});
