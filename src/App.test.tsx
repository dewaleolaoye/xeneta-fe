import { screen } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import App from './App';

test('renders the app with title', () => {
  renderWithProviders(<App />);
  const title = screen.getByText(
    /Ocean & Air Freight Rate Benchmarking Platform/i
  );

  expect(title).toBeInTheDocument();
});
