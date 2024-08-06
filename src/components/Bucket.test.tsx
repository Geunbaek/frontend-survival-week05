import { render, screen } from '@testing-library/react';
import fixtures from '../../fixtures';
import Bucket from './Bucket';

const setMenus = jest.fn();

jest.mock('usehooks-ts', () => ({
  useLocalStorage: () => [fixtures.foods, setMenus],
  useInterval: () => jest.fn(),
}));

describe('Bucket', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders title', () => {
    render(<Bucket />);

    screen.getByText(/점심 바구니/);
  });

  it('renders order food list', async () => {
    render(<Bucket />);

    screen.getByText(/짜장면/);
    screen.getByText(/짬뽕/);
  });
});
