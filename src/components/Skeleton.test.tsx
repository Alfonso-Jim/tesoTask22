import { render, screen } from '@testing-library/react';
import Skeleton from './Skeleton';

describe('test the Skeleton component', () => {
  test('renders the Skeleton component', () => {
    render(<Skeleton />);
    const result = screen.getByTestId('skeleton-id');
    expect(result).toBeInTheDocument();
  });
});
