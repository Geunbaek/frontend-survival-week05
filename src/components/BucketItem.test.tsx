import { render, screen } from '@testing-library/react';
import BucketItem from './BucketItem';
import fixtures from '../../fixtures';

describe('BucketItem', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders food', () => {
    const restaurantMenu = fixtures.foods[0];
    const onRemove = jest.fn();

    render(<BucketItem restaurantMenu={restaurantMenu} onRemove={onRemove} />);

    screen.getByText(/짜장면/);
  });
});
