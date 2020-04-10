import nullFactory from '@/typescript-test/1_simple/nullFactory';

describe('Null factory function:', () => {
  test('should return false value null', () => {
    expect(nullFactory()).toBe(null);
    expect(nullFactory()).toBeNull();
    expect(nullFactory()).toBeFalsy(); //undefined, null, 0, ''
    expect(nullFactory()).toBeDefined();
    expect(nullFactory()).not.toBeTruthy();
    expect(nullFactory()).not.toBeUndefined();
  });
});
