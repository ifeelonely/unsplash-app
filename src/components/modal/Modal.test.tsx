import { screen, render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Modal from './Modal';

const card = {
  imgPath: 'fsdfsd',
  name: 'Nick',
  date: '23.02.1998',
  quantity: '4',
  isUsed: false,
  importValue: 'export',
  id: 2,
};

const resetCardData = () => {
  const mock = false;
  return mock;
};

describe('Modal', () => {
  it('Renders about div', () => {
    render(<Modal resetCardData={resetCardData} card={card} />);
    const name = screen.getByText(/Nick/i);
    expect(name).toBeInTheDocument();
  });
});
