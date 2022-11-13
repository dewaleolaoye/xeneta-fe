import { render, screen } from '@testing-library/react';
import Select from './Select';

test('renders Select with a label', async () => {
  render(
    <Select label="origin">
      <option>Random test</option>
    </Select>
  );

  const label = await screen.findByLabelText(/origin/i);
  expect(label).toBeInTheDocument();
});
