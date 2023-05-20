import { screen, render } from '@testing-library/react';
import { describe, it } from 'vitest';
import ItemCard from './ItemCard';
import { ItemProp } from './ItemPropInterface';

const mockItem: ItemProp = {
  imgPath: new File([], ''),
  name: 'Name',
  date: '05-03-1998',
  quantity: '5',
  isUsed: false,
  importValue: 'export',
  id: 0,
};

const getCardData = () => {
  const mock = 1 + 2;
  return mock;
};

describe('Item card', () => {
  it('Renders about div', () => {
    render(
      <ItemCard
        getCardData={getCardData}
        cardProps={mockItem}
        key={mockItem.id}
      />
    );
    const name = screen.getByText(/details/i);
    expect(name).toBeInTheDocument();
  });
});
