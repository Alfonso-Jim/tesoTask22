import { render, screen } from '@testing-library/react';
import HomeSvg from './HomeSvg';

describe('test the HomeSvg component', () => {
  test('renders the HomeSvg component', () => {
    render(<HomeSvg />);
    const result = screen.getByTestId('svg');
    expect(result).toBeInTheDocument();
  });
});
