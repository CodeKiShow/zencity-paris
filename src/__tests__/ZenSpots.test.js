import { render, screen } from '@testing-library/react';
import ZenSpots from '../components/ZenSpots';

describe('ZenSpots Component', () => {
  test('renders zen spots list', () => {
    render(<ZenSpots />);
    expect(screen.getByText('Spots Zen à Paris')).toBeInTheDocument();
  });
});