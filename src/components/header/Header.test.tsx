import { screen, render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('About page', () => {
  it('Renders about div', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const aboutDiv = screen.getByText(/Home/i);
    expect(aboutDiv).toBeInTheDocument();
  });
});
