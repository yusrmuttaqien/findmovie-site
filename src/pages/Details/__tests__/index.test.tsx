import { describe, expect, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  LoaderFunctionArgs,
  useOutletContext,
  redirect,
  useLoaderData,
  useNavigate,
} from 'react-router-dom';
import { useFetchDetails } from 'hooks/index';
import Details, { loader, useDetails } from '..';

vi.mock('hooks/index');
vi.mock('react-router-dom', async () => {
  const mod = (await vi.importActual('react-router-dom')) as object;

  return {
    ...mod,
    useOutletContext: vi.fn(() => {}),
    useLoaderData: vi.fn(() => {}),
    useNavigate: vi.fn(() => {}),
    Outlet: vi.fn(() => <div data-testid="outlet" />),
    Link: vi.fn(({ to }) => <a href={to} />),
    redirect: vi.fn(),
  };
});
vi.mock('components/Footer', () => ({ default: vi.fn(() => <footer />) }));
vi.mock('components/Loading', () => ({ default: vi.fn(() => <div data-testid="loading" />) }));
vi.mock('components/ScrollToTop', () => ({ default: vi.fn(() => null) }));
vi.mock('pages/Details/styles', () => ({
  Wrapper: vi.fn(({ children }) => <section>{children}</section>),
  Read: vi.fn(({ onClick, onKeyUp }) => (
    <svg data-testid="read" onClick={onClick} onKeyUp={onKeyUp} />
  )),
  Link: vi.fn(({ children }) => <a>{children}</a>),
  Backdrop: vi.fn(({ children }) => <div>{children}</div>),
}));

describe('Details page index', () => {
  test('should called useOutletContext when calling useDetails', () => {
    const outletContext = vi.fn();
    const mock = vi.mocked(useOutletContext).mockImplementation(outletContext);
    useDetails();

    expect(mock).toBeCalled();
  });
  test('should return/act correctly based on type', () => {
    let data: { request: { url: string }; params: { id?: string } } = {
      request: {
        url: 'https://api.themoviedb.org/3/movie/123',
      },
      params: { id: '123' },
    };

    let result1 = loader(data as LoaderFunctionArgs);
    expect(result1).toEqual({ id: '123', type: { raw: 'movie', show: 'Movie' } });

    data.request.url = 'https://api.themoviedb.org/3/tv/1234';
    data.params.id = '1234';
    let result2 = loader(data as LoaderFunctionArgs);
    expect(result2).toEqual({ id: '1234', type: { raw: 'tv', show: 'TV Series' } });

    data.request.url = 'https://api.themoviedb.org/3';
    data.params.id = undefined;
    const redirectFn = vi.fn();
    const mockRedirect = vi.mocked(redirect).mockImplementation(redirectFn);
    loader(data as LoaderFunctionArgs);
    expect(mockRedirect).toBeCalled();
  });
  test('should auto redirect if data is not found', () => {
    const redirectFn = vi.fn();
    vi.mocked(useLoaderData).mockImplementationOnce(() => ({
      id: '123',
      type: { raw: 'movie', show: 'Movie' },
    }));
    // @ts-expect-error
    vi.mocked(useFetchDetails).mockImplementationOnce(() => ({ isLoading: false }));
    vi.mocked(useNavigate).mockImplementationOnce(() => redirectFn);
    render(<Details />);

    expect(redirectFn).toBeCalledWith('/');
  });
  test('should render Loading and other loading indicator when isLoading is true', () => {
    vi.mocked(useLoaderData).mockImplementationOnce(() => ({
      id: '123',
      type: { raw: 'movie', show: 'Movie' },
    }));
    // @ts-expect-error
    vi.mocked(useFetchDetails).mockImplementationOnce(() => ({ isLoading: true }));
    render(<Details />);

    expect(screen.getAllByTestId('loading')).toBeDefined();
    expect(screen.getByText('Auto redirect if not found')).toBeDefined();
    expect(screen.getByText('Getting metadata')).toBeDefined();
    expect(screen.queryByTestId('outlet')).toBeNull();
    expect(screen.queryByText('Go Home')).toBeNull();
    expect(screen.queryByText(`It's a Movie`)).toBeNull();
  });
  test('should render content when data is available/loaded', () => {
    const data = {
      title: 'tTitle',
      backdrop: 'backdrop',
    };
    vi.mocked(useLoaderData).mockImplementationOnce(() => ({
      id: '123',
      type: { raw: 'movie', show: 'Movie' },
    }));
    // @ts-expect-error
    vi.mocked(useFetchDetails).mockImplementation(() => ({ isLoading: false, data }));
    render(<Details />);

    expect(screen.getByText('Go Home')).toBeDefined();
    expect(screen.getByText(`It's a Movie`)).toBeDefined();
    expect(screen.getByText('tTitle')).toBeDefined();
    expect(screen.queryByTestId('loading')).toBeNull();
  });
  test('should scroll to content on Read mouse click or keyboard enter', () => {
    const scrollTo = vi.fn();
    global.scrollTo = scrollTo;
    const data = {
      title: 'tTitle',
      backdrop: 'backdrop',
    };
    vi.mocked(useLoaderData).mockImplementationOnce(() => ({
      id: '123',
      type: { raw: 'movie', show: 'Movie' },
    }));
    // @ts-expect-error
    vi.mocked(useFetchDetails).mockImplementation(() => ({ isLoading: false, data }));
    render(<Details />);

    const read = screen.getByTestId('read');
    fireEvent.click(read);
    fireEvent.keyUp(read, { key: 'Enter' });
    expect(scrollTo).toBeCalledTimes(2);
  });
  test('should not scroll to content when keyboard not enter', () => {
    const scrollTo = vi.fn();
    global.scrollTo = scrollTo;
    const data = {
      title: 'tTitle',
      backdrop: 'backdrop',
    };
    vi.mocked(useLoaderData).mockImplementationOnce(() => ({
      id: '123',
      type: { raw: 'movie', show: 'Movie' },
    }));
    // @ts-expect-error
    vi.mocked(useFetchDetails).mockImplementation(() => ({ isLoading: false, data }));
    render(<Details />);

    const read = screen.getByTestId('read');
    fireEvent.keyUp(read, { key: 'Escape' });
    expect(scrollTo).toBeCalledTimes(0);
  });
});
