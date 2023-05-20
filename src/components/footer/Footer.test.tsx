import { screen, render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Footer from './Footer';

describe('About page', () => {
  it('Renders about div', () => {
    render(<Footer />);
    const aboutDiv = screen.getByText(/footer/i);
    expect(aboutDiv).toBeInTheDocument();
  });
});
