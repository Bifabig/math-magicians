import operate from './operate';

describe('operate module', () => {
  test('division by zero not possible', () => {
    const num1 = '4';
    const num2 = '0';
    const operation = '÷';
    expect(operate(num1, num2, operation)).toBe("Can't divide by 0.");
  });
  test('multiply 7 by 7', () => {
    const num1 = '7';
    const num2 = '7';
    const operation = 'x';
    expect(operate(num1, num2, operation)).toBe('49');
  });
});
