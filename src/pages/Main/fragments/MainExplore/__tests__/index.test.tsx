import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useFetchHome } from 'hooks/index';
import MainExplore from '..';

vi.mock('hooks/index');
vi.mock('components/ContentCard', () => ({
  default: vi.fn(({ title }) => <figure>{title}</figure>),
}));
vi.mock('pages/Main/fragments/MainExplore/styles', () => ({
  Wrapper: vi.fn(({ children }) => <section>{children}</section>),
  Group: vi.fn(({ children }) => <div>{children}</div>),
  Loading: vi.fn(() => <div data-testid="loading" />),
}));

describe('Main page fragment: MainExplore index', () => {
  test('should render Loading only when isLoading is true', () => {
    // @ts-expect-error
    vi.mocked(useFetchHome).mockImplementationOnce(() => ({ isLoading: true }));
    render(<MainExplore />);

    expect(screen.getAllByTestId('loading')).toBeDefined();
    expect(screen.queryByText('Movies')).toBeNull();
    expect(screen.queryByText('TV Series')).toBeNull();
  });
  test('should render contents when data is available/loaded', () => {
    const data = {
      trending: {
        movies: [{ title: 'tMovie' }],
        tvs: [{ title: 'tTV' }],
      },
      discover: {
        movies: [{ title: 'dMovie' }],
        tvs: [{ title: 'dTV' }],
      },
    };
    // @ts-expect-error
    vi.mocked(useFetchHome).mockImplementationOnce(() => ({ isLoading: false, data }));
    render(<MainExplore />);

    expect(screen.getByText('tMovie')).toBeDefined();
    expect(screen.getByText('tTV')).toBeDefined();
    expect(screen.getByText('dMovie')).toBeDefined();
    expect(screen.getByText('dTV')).toBeDefined();
    expect(screen.queryByTestId('loading')).toBeNull();
  });
});
