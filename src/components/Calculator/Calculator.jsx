import React, { useState } from 'react';

function Calculator() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(null);

  const calculate = (operation) => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Введите корректные числа');
      return;
    }

    let res;
    switch (operation) {
      case '+':
        res = num1 + num2;
        break;
      case '-':
        res = num1 - num2;
        break;
      case '*':
        res = num1 * num2;
        break;
      case '/':
        res = num2 !== 0 ? num1 / num2 : 'Деление на ноль!';
        break;
      default:
        return;
    }
    setResult(res);
  };

  return (
    <div>
      <h1>Калькулятор</h1>
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
        placeholder="Первое число"
      />
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
        placeholder="Второе число"
      />
      <div>
        <button onClick={() => calculate('+')}>+</button>
        <button onClick={() => calculate('-')}>-</button>
        <button onClick={() => calculate('*')}>*</button>
        <button onClick={() => calculate('/')}>/</button>
      </div>
      {result !== null && <h2>Результат: {result}</h2>}
    </div>
  );
}

export default Calculator;
