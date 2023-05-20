import { screen, render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';
import HomePage from './HomePage';

describe('Form page', () => {
  it('Renders about div', () => {
    const store = setupStore();
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    const aboutDiv = screen.getByText(/cards not found!/i);
    expect(aboutDiv).toBeInTheDocument();
  });
});
