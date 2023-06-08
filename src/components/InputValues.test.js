import React from 'react';
import renderer from 'react-test-renderer';
import InputValues from './InputValues';

const DATA = {
  next: '7',
  total: '7',
  operation: '+',
};

const VALUES = [
  'AC',
  '+/-',
  '%',
  '÷',
  '7',
  '8',
  '9',
  'x',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  '.',
  '=',
];

const setData = jest.fn(() => DATA);

it('renders correctly', () => {
  const tree = renderer
    .create(<InputValues data={DATA} setData={setData} values={VALUES} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
