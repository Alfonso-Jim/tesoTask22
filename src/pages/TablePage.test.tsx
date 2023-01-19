import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import TablePage from './TablePage';

describe('test the TablePage component', () => {
  test('renders the appbar', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <TablePage />
        </BrowserRouter>
      </Provider>
    );
    const result = screen.getByTestId('app-bar');
    expect(result).toBeInTheDocument();
  });
  test('renders the data table in loading state', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <TablePage />
        </BrowserRouter>
      </Provider>
    );
    const result = screen.getByTestId('data-table');
    expect(result).toBeInTheDocument();
  });
  test('renders the data table with data', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <TablePage />
        </BrowserRouter>
      </Provider>
    );
    const dataItems = await screen.findAllByRole('row');
    expect(dataItems).not.toHaveLength(0);
  });
  test('logs the user out', () => {
    const dispatch = jest.fn(() => {
      return {};
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <TablePage />
        </BrowserRouter>
      </Provider>
    );

    const logout = screen.getByTestId('logout-btn');
    fireEvent.submit(logout);

    expect(dispatch()).toStrictEqual({});
  });
});
