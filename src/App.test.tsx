import { screen } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from 'test/test-utils';

test('renders the app with title', () => {
  renderWithProviders(<App />);
  const title = screen.getByText(
    /Ocean & Air Freight Rate Benchmarking Platform/i
  );
  // const linkElement = screen.getByText(/learn react/i);
  expect(title).toBeInTheDocument();
});
