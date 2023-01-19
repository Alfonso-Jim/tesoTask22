import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../app/store';
import { TemporaryDrawer } from './TemporaryDrawer';

describe('test the TemporaryDrawer component', () => {
  test('renders the drawer component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <TemporaryDrawer isHome={true} />
        </BrowserRouter>
      </Provider>
    );
    const result = screen.getByTestId('drawer');
    expect(result).toBeInTheDocument();
  });
});
