import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useDetails } from 'pages/Details';
import MovieDetail from '..';
import { DetailsMetadata } from 'utils/fetch';

vi.mock('pages/Details', () => {
  const mod = vi.importActual('pages/Details');

  return {
    ...mod,
    useDetails: vi.fn(() => ({})),
  };
});
vi.mock('components/Pill', () => ({
  default: vi.fn(({ children }) => <figure>{children}</figure>),
}));
vi.mock('components/Avatar', () => ({
  default: vi.fn(({ name, character, profile }) => (
    <figure data-testid={name + character + profile} />
  )),
}));
vi.mock('pages/Details/fragments/MovieDetail/styles', () => ({
  Wrapper: vi.fn(({ children }) => <section>{children}</section>),
}));

describe('Details page fragment: MovieDetail index', () => {
  test('should render content properly', () => {
    let data: DetailsMetadata = {
      id: 'test',
      title: 'test',
      backdrop: 'test',
      genres: [],
      production: [],
      credits: [
        {
          name: 'name',
          character: 'char',
          profile: 'prof',
        },
      ],
    };

    // @ts-expect-error
    vi.mocked(useDetails).mockImplementationOnce(() => ({ data }));

    render(<MovieDetail />);

    expect(screen.getByText(data.title)).toBeDefined();
    expect(
      screen.getByTestId(data.credits[0].name + data.credits[0].character + data.credits[0].profile)
    ).toBeDefined();
    expect(screen.queryByText('Genres')).toBeNull();
    expect(screen.queryByText('Production of')).toBeNull();
    expect(screen.queryByText('Overview')).toBeNull();

    data.genres = ['genre'];
    data.production = ['prod'];
    data.overview = 'overview';
    // @ts-expect-error
    vi.mocked(useDetails).mockImplementationOnce(() => ({ data }));

    render(<MovieDetail />);

    expect(screen.getByText(data.genres[0])).toBeDefined();
    expect(screen.getByText(data.production[0])).toBeDefined();
    expect(screen.getByText(data.overview)).toBeDefined();
  });
});
