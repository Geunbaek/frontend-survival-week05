import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const setValue = jest.fn();

  it('renders receipt', () => {
    render(<SearchBar value="" setValue={setValue} />);
    screen.getByLabelText(/검색/);
  });
});
