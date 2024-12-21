import { render, screen } from '@testing-library/react';
import UserProfile from '../components/UserProfile';

describe('UserProfile Component', () => {
  test('renders user profile', () => {
    render(<UserProfile />);
    expect(screen.getByText('Julie Martin')).toBeInTheDocument();
  });
});