import { screen, render } from '@testing-library/react';
import { describe, it } from 'vitest';
import AboutPage from './AboutPage';

describe('About page', () => {
  it('Renders about div', () => {
    render(<AboutPage />);
    const aboutDiv = screen.getByText(/aboutpage/i);
    expect(aboutDiv).toBeInTheDocument();
  });
});
