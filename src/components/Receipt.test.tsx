import { render, screen } from '@testing-library/react';
import Receipt from './Receipt';
import useOrder from '../hooks/useOrder';
import fixtures from '../../fixtures';

jest.mock('../hooks/useOrder');

describe('Receipt', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const { receipt } = fixtures;
  (useOrder as jest.Mock).mockReturnValue({ receipt });

  it('renders receipt', () => {
    render(<Receipt />);

    screen.getByText(/\[영수증 나오는 곳\]/);
    screen.getByText(/주문번호:/);
    screen.getByText(/주문목록:/);
    screen.getByText(/짜장면/);
    screen.getByText(/총 가격: 13,000원/);
  });
});
