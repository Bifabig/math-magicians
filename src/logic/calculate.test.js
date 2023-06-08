import calculate from './calculate';

describe('calculate module', () => {
  test('returns null for all values', () => {
    const obj = { total: null, next: null, operation: null };
    expect(calculate(obj, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
  test('when obj all values are filled and the = button is pressed total is calculated', () => {
    const obj = { total: '7', next: '7', operation: '+' };
    expect(calculate(obj, '=')).toEqual({
      total: '14',
      next: null,
      operation: null,
    });
  });
});
