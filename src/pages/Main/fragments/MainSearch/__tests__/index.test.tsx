import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useFetchSearch } from 'hooks/index';
import MainSearch from '..';

vi.mock('hooks/index');
vi.mock('components/ContentCard', () => ({
  default: vi.fn(({ title }) => <figure>{title}</figure>),
}));
vi.mock('pages/Main/fragments/MainSearch/styles', () => ({
  Wrapper: vi.fn(({ children }) => <section>{children}</section>),
  Group: vi.fn(({ children }) => <div>{children}</div>),
  Loading: vi.fn(() => <div data-testid="loading" />),
  Pagination: vi.fn(() => <div data-testid="pagination" />),
  Avatar: vi.fn(({ name }) => <figure>{name}</figure>),
}));

describe('Main page fragment: MainSearch index', () => {
  test('should render Loading only when isLoading is true', () => {
    // @ts-expect-error
    vi.mocked(useFetchSearch).mockImplementationOnce(() => ({ isLoading: true }));
    render(<MainSearch query="test" />);

    expect(screen.getAllByTestId('loading')).toBeDefined();
    expect(screen.getByText('There is no')).toBeDefined();
    expect(screen.getByText('in TheMovieDB database')).toBeDefined();
    expect(screen.queryByTestId('pagination')).toBeNull();
    expect(screen.queryByText('Movies')).toBeNull();
  });
  test('should render contents when data is available/loaded', () => {
    type MockData = {
      pagination: {
        page: number;
        totalPages?: number;
        totalResults: number;
      };
      movie: { title: string }[];
      people: { name: string }[];
      tv: { title: string }[];
    };

    let data: MockData = {
      pagination: {
        page: 1,
        totalPages: undefined,
        totalResults: 100,
      },
      movie: [{ title: 'MovieTitle' }],
      people: [],
      tv: [],
    };
    // @ts-expect-error
    vi.mocked(useFetchSearch).mockImplementation(() => ({ isLoading: false, data }));
    const { rerender } = render(<MainSearch query="test" />);

    expect(screen.getByText('Search result for')).toBeDefined();
    expect(screen.getByText('MovieTitle')).toBeDefined();
    expect(screen.getAllByTestId('pagination')).toBeDefined();
    expect(screen.queryByTestId('loading')).toBeNull();
    expect(screen.queryByText('People')).toBeNull();
    expect(screen.queryByText('TV Series')).toBeNull();
    expect(screen.queryByText('There is no')).toBeNull();
    expect(screen.queryByText('in TheMovieDB database')).toBeNull();

    data.pagination.totalPages = 10;
    data.people = [{ name: 'PeopleName' }];
    rerender(<MainSearch query="test" />);

    expect(screen.getByText('PeopleName')).toBeDefined();

    data.tv = [{ title: 'TVTitle' }];
    rerender(<MainSearch query="test" />);

    expect(screen.getByText('TVTitle')).toBeDefined();
  });
});
