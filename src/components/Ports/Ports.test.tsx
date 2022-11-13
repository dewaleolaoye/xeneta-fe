import { screen } from '@testing-library/react';
import { Ports } from 'components';
import { renderWithProviders } from 'test/test-utils';

test('origin and destination is rendered', async () => {
  renderWithProviders(<Ports />);

  const originSelect = await screen.findByLabelText(/origin/i);
  expect(originSelect).toBeInTheDocument();

  const destinationSelect = await screen.findByLabelText(/destination/i);
  expect(destinationSelect).toBeInTheDocument();
});
