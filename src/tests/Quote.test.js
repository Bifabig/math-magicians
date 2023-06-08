import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import fetchMock, { enableFetchMocks } from 'jest-fetch-mock';
import Quote from '../routes/Quote';

describe('Quote', () => {
  enableFetchMocks();
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test('renders quotes when API call succeeds', async () => {
    const fakeQuote = [
      { id: '1', quote: 'quote1' },
      { id: '2', quote: 'quote2' },
    ];
    fetchMock.mockResolvedValue({
      status: 200,
      json: jest.fn(() => fakeQuote),
    });

    render(<Quote />);

    await waitFor(() => expect(screen.queryAllByRole('listitem')).toHaveLength(2));
  });

  test('renders error when API call fails', async () => {
    fetchMock.mockReject(() => Promise.reject(new Error('API error')));

    render(<Quote />);

    await waitFor(() => expect(screen.queryAllByRole('listitem')).toHaveLength(0));
  });
});
