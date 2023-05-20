import { screen, render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';
import FormPage from './FormPage';

describe('Form page', () => {
  it('Renders about div', () => {
    const store = setupStore();
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    const aboutDiv = screen.getByText(/formpage/i);
    expect(aboutDiv).toBeInTheDocument();
  });
});
