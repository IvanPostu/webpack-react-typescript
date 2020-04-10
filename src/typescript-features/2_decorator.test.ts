import { Form, validate } from '@/typescript-features/2_decorator';

describe('Check if validation annotation work:', () => {
  let formWithUndefinedArg: Form;
  let normalForm: Form;

  beforeAll(() => {
    formWithUndefinedArg = new Form();
    normalForm = new Form('some string');
  });

  test('test validate function', () => {
    expect(validate(formWithUndefinedArg)).toBe(false);
    expect(validate(normalForm)).toBe(true);
  });
});
