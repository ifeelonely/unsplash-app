import { screen, render } from '@testing-library/react';
import { describe, it } from 'vitest';
import NotFoundPage from './NotFoundPage';

describe('NotFound page', () => {
  it('Renders about div', () => {
    render(<NotFoundPage />);
    const aboutDiv = screen.getByText(/NotFound/i);
    expect(aboutDiv).toBeInTheDocument();
  });
});
