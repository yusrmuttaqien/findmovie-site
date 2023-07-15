import { useState, useRef, useEffect } from 'react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { useFetchSearch } from 'hooks/index';
import { debounce } from 'utils/index';
import theme from 'styles/index';
import MainSearch from '..';

vi.mock('react');
vi.mock('utils/index');
vi.mock('hooks/index');
vi.mock('components/ContentCard', () => ({
  default: vi.fn(({ title }) => <figure>{title}</figure>),
}));
vi.mock('pages/Main/fragments/MainSearch/styles', () => ({
  Wrapper: vi.fn(({ children }) => <section>{children}</section>),
  Group: vi.fn(({ children }) => <div>{children}</div>),
  Loading: vi.fn(() => <div data-testid="loading" />),
  Pagination: vi.fn(({ handleOnJump }) => (
    <button data-testid="pagination" onClick={() => handleOnJump(2)()} />
  )),
  Avatar: vi.fn(({ name }) => <figure>{name}</figure>),
}));

describe('Main page fragment: MainSearch index', () => {
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

  const scrollTo = vi.fn();
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

  beforeEach(() => {
    vi.mocked(debounce).mockImplementation((a) => (v) => a(v));
    global.scrollTo = scrollTo;
  });

  afterEach(() => {
    scrollTo.mockReset();
    vi.restoreAllMocks();
  });

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
  test('should scroll to position after inputting query', () => {
    // @ts-expect-error
    vi.mocked(useFetchSearch).mockImplementation(() => ({ isLoading: false, data }));
    const { rerender } = render(<MainSearch query="test" />);

    expect(scrollTo).toBeCalledTimes(1);

    rerender(<MainSearch query="test2" />);

    expect(scrollTo).toBeCalledTimes(2);
  });
  test('should not hit window.scrollTo when using pagination', () => {
    let refValue = {};
    const setCurrentPage = vi.fn();
    vi.mocked(useRef).mockImplementation(() => refValue as React.MutableRefObject<string>);
    vi.mocked(useState).mockImplementation(() => [1, setCurrentPage]);
    // @ts-expect-error
    vi.mocked(useFetchSearch).mockImplementation(() => ({ isLoading: false, data }));
    const { rerender } = render(<MainSearch query="test" />);
    const paginations = screen.getAllByTestId('pagination');

    expect(scrollTo).toBeCalledTimes(1);
    fireEvent.click(paginations[0]);

    rerender(<MainSearch query="test" />);

    expect(setCurrentPage).toBeCalled();
    expect(scrollTo).toBeCalledTimes(1);
  });
  test('should change visible count according to screen width', async () => {
    let visibleCount = 3;
    const setVisibleCount = vi.fn((c) => (visibleCount = c));
    vi.mocked(useState).mockImplementation(() => [1, vi.fn()]);
    vi.mocked(useState).mockImplementation(() => [visibleCount, setVisibleCount]);
    // @ts-expect-error
    vi.mocked(useFetchSearch).mockImplementation(() => ({ isLoading: false, data }));

    const { rerender } = render(<MainSearch query="test" />);

    fireEvent.resize(window, { target: { screen: { width: theme.screen.tablet.min } } });

    rerender(<MainSearch query="test" />);
    expect(visibleCount).toBe(4);

    fireEvent.resize(window, { target: { screen: { width: theme.screen.desktop } } });

    rerender(<MainSearch query="test" />);
    expect(visibleCount).toBe(8);
  });
  test('should run removeEventListener when unmounting', () => {
    let cacheCleanup: Function = vi.fn();
    const remover = vi.spyOn(window, 'removeEventListener').mockImplementation(() => {});
    // @ts-expect-error
    vi.mocked(useFetchSearch).mockImplementation(() => ({ isLoading: false, data }));
    vi.mocked(useEffect).mockImplementationOnce((a) => a());
    vi.mocked(useEffect).mockImplementationOnce((a) => (cacheCleanup = a() as Function));

    const { unmount } = render(<MainSearch query="test" />);
    unmount();
    cacheCleanup();

    expect(remover).toBeCalled();
  });
});
