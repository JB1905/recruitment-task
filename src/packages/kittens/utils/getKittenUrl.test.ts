import { getKittenUrl } from './getKittenUrl';

const BASE_URL = 'https://placekittens.com';

describe('getKittenUrl', () => {
  it('builds a url with the given width and height', () => {
    expect(getKittenUrl(BASE_URL, 300, 200)).toBe(
      'https://placekittens.com/300/200',
    );
  });

  it('builds a url with different dimensions', () => {
    expect(getKittenUrl(BASE_URL, 100, 400)).toBe(
      'https://placekittens.com/100/400',
    );
  });

  it('handles equal width and height', () => {
    expect(getKittenUrl(BASE_URL, 500, 500)).toBe(
      'https://placekittens.com/500/500',
    );
  });
});
