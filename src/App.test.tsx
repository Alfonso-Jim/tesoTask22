import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './app/store';

describe('test the App component', () => {
  test('renders the App component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const result = screen.getByText(/home/i);
    expect(result).toBeInTheDocument();
  });
});
