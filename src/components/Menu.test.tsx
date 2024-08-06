import { render, screen } from '@testing-library/react';
import Menu from './Menu';
import fixtures from '../../fixtures';

describe('Menu', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const filteredRestaurants = fixtures.restaurants;

  it('renders table head', () => {
    render(<Menu filteredRestaurants={filteredRestaurants} />);

    screen.getByText(/식당 이름/);
    screen.getByText(/종류/);
    screen.getByText(/메뉴/);
  });

  it('renders menu', () => {
    render(<Menu filteredRestaurants={filteredRestaurants} />);

    screen.getByText(/짜장면/);
    screen.getByText(/짬뽕/);
  });
});
