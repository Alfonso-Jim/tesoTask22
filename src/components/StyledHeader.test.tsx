import { render, screen } from '@testing-library/react';
import StyledHeader from './StyledHeader';

describe('test the StyledHeader component', () => {
  test('renders the StyledHeader component', () => {
    render(<StyledHeader />);
    const result = screen.getByTestId('header');
    expect(result).toBeInTheDocument();
  });
});
