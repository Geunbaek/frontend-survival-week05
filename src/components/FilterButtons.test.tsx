import { render, screen } from '@testing-library/react';
import FilterButtons from './FilterButtons';

describe('FilterButtons', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders buttons', () => {
    const setFilter = jest.fn();
    render(<FilterButtons setFilter={setFilter} />);

    screen.getByText(/전체/);
    screen.getByText(/중식/);
    screen.getByText(/한식/);
    screen.getByText(/일식/);
  });
});
