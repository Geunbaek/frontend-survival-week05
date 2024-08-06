import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders title', () => {
    render(<Header title="푸드코트 키오스크" />);

    screen.getByText(/푸드코트 키오스크/);
  });
});
