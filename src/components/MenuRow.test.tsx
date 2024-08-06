import { render, screen } from '@testing-library/react';
import MenuRow from './MenuRow';

describe('MenuRow', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const restaurant = {
    id: 'RESTAURANT_01',
    category: '중식',
    name: '메가반점',
    menu: [
      {
        id: 'FOOD_01',
        name: '짜장면',
        price: 8_000,
      },
      {
        id: 'FOOD_02',
        name: '짬뽕',
        price: 5_000,
      },
    ],
  };

  it('renders restaurant', () => {
    render(<MenuRow restaurant={restaurant} />);

    screen.getByText(/중식/);
    screen.getByText(/메가반점/);
    screen.getByText(/짜장면/);
    screen.getByText(/짬뽕/);
  });
});
