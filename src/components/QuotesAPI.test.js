import * as API from './QuotesApi';

test('api fetch works', async () => {
  const data = await API.quotes;
  expect(data).toMatchSnapshot();
});
