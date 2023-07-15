import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ContentCard, { FusionProps } from '..';

vi.mock('components/ContentCard/styles', () => ({
  Wrapper: vi.fn(({ children }) => <section>{children}</section>),
  Backdrop: vi.fn(({ children, $placeholder }) => (
    <div data-testid={`${$placeholder[0]}-${$placeholder[1]}`}>{children}</div>
  )),
  Link: vi.fn(({ to, children }) => <a href={to}>{children}</a>),
}));
vi.mock('assets/nativeSVGs/NoImageDesktop.svg?url', () => ({ default: 'NIDesktop' }));
vi.mock('assets/nativeSVGs/NoImageMobile.svg?url', () => ({ default: 'NIMobile' }));

describe('ContentCard component index', () => {
  const props: FusionProps = {
    backdrop: 'image',
    date: 'date',
    lang: 'lang',
    overview: 'overview',
    title: 'title',
    type: 'movie',
  };

  test('should render content default & disable link when no id', () => {
    render(<ContentCard {...props} />);

    const linkEl = document.getElementsByTagName('a')[0];
    const imgEl = document.getElementsByTagName('img')[0];
    expect(screen.getByText(props.lang)).toBeDefined();
    expect(screen.getByText(props.date)).toBeDefined();
    expect(linkEl.getAttribute('href')).toEqual('#');
    expect(screen.getByText(props.title)).toBeDefined();
    expect(screen.getByText(props.overview)).toBeDefined();
    expect(screen.getByTestId('NIDesktop-NIMobile')).toBeDefined();
    expect(imgEl.getAttribute('src')).toEqual(props.backdrop);
  });
  test('should render enable link when id available', () => {
    props.id = 1;

    render(<ContentCard {...props} />);

    const linkEl = document.getElementsByTagName('a')[0];
    expect(linkEl.getAttribute('href')).toEqual(`/details/${props.type}/${props.id}`);
  });
});
