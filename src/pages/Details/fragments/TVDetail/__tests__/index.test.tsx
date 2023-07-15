import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useDetails } from 'pages/Details';
import { DetailsMetadata } from 'utils/fetch';
import TVDetail from '..';

vi.mock('pages/Details');
vi.mock('components/Pill', () => ({
  default: vi.fn(({ children }) => <figure>{children}</figure>),
}));
vi.mock('components/Avatar', () => ({
  default: vi.fn(({ name, character, profile }) => (
    <figure data-testid={name + character + profile} />
  )),
}));
vi.mock('pages/Details/fragments/TVDetail/styles', () => ({
  Wrapper: vi.fn(({ children }) => <section>{children}</section>),
  ContentCard: vi.fn(({ title, backdrop, overview, lang, date }) => (
    <figure data-testid={title + backdrop + overview + lang + date} />
  )),
}));

describe('Details page fragment: TVDetail index', () => {
  test('should render content properly', () => {
    let data: DetailsMetadata = {
      id: 'id',
      title: 'title',
      backdrop: 'backdrop',
      genres: [],
      production: [],
      credits: [
        {
          name: 'name',
          character: 'char',
          profile: 'prof',
        },
      ],
      episodes: 1,
      seasons: 2,
      latestEpisode: {
        title: 'lTitle',
        backdrop: 'lBackdrop',
        overview: 'lOverview',
        lang: 'lang',
        date: 'date',
      },
    };

    // @ts-expect-error
    vi.mocked(useDetails).mockImplementationOnce(() => ({ data }));

    render(<TVDetail />);

    expect(screen.getByText(data.title)).toBeDefined();
    expect(screen.getByText(`${data.seasons} Season • ${data.episodes} Episodes`)).toBeDefined();
    expect(
      screen.getByTestId(data.credits[0].name + data.credits[0].character + data.credits[0].profile)
    ).toBeDefined();
    expect(
      screen.getByTestId(
        (data.latestEpisode?.title || '') +
          (data.latestEpisode?.backdrop || '') +
          data.latestEpisode?.overview +
          data.latestEpisode?.lang +
          data.latestEpisode?.date
      )
    ).toBeDefined();
    expect(screen.queryByText('Genres')).toBeNull();
    expect(screen.queryByText('Production of')).toBeNull();
    expect(screen.queryByText('Overview')).toBeNull();

    data.genres = ['genre'];
    data.production = ['prod'];
    data.overview = 'overview';
    // @ts-expect-error
    vi.mocked(useDetails).mockImplementationOnce(() => ({ data }));

    render(<TVDetail />);

    expect(screen.getByText(data.genres[0])).toBeDefined();
    expect(screen.getByText(data.production[0])).toBeDefined();
    expect(screen.getByText(data.overview)).toBeDefined();
  });
});
