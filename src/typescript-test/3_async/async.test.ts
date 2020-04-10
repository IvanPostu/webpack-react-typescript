import { Ajax } from '@/typescript-test/3_async/async';

describe('Ajax: echo', () => {
  test('should return value async', async () => {
    const result = await Ajax.echo('some data');
    expect(result).toBe('some data');
  });

  test('should return value with promise', () => {
    return Ajax.echo('some data').then((data) => {
      expect(data).toBe('some data');
    });
  });

  test('should catch error with async', async () => {
    try {
      await Ajax.echo(0);
    } catch (_e) {
      const e: Error = _e;
      expect(e.message).toBe('error1');
    }
  });

  test('should catch error with promise', () => {
    return Ajax.echo('some data').catch((err) => {
      expect(err).toBeInstanceOf(Error);
    });
  });
});
