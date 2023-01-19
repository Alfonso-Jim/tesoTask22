import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Home from './Home';

describe('test the Home component', () => {
  test('renders the svg', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
    const result = screen.getByTestId('svg');
    expect(result).toBeInTheDocument();
  });
  test('renders login text', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
    const result = screen.getByTestId('login-text');
    expect(result).toBeInTheDocument();
  });
  test('renders the username field', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
    const result = screen.getByTestId('username-field');
    expect(result).toBeInTheDocument();
  });
  test('renders the password field', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
    const result = screen.getByTestId('password-field');
    expect(result).toBeInTheDocument();
  });
  test('renders the loginBtn', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
    const result = screen.getByTestId('login-btn');
    expect(result).toBeInTheDocument();
  });
  test('logs the user in', () => {
    const dispatch = jest.fn(() => {
      return {
        token: 'dummyToken',
      };
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );

    const userNameField = screen.getByLabelText(/user name/i);
    userEvent.type(userNameField, 'tesonet');

    const passwordField = screen.getByLabelText(/password/i);
    userEvent.type(passwordField, 'partyanimal');

    const loginBtn = screen.getByTestId('login-btn');
    fireEvent.submit(loginBtn);

    expect(dispatch()).toStrictEqual({
      token: 'dummyToken',
    });
  });
});
