import { useState } from 'react';
import { describe, expect, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { debounce } from 'utils/index';
import Main from '..';

vi.mock('react');
vi.mock('utils/index');
vi.mock('pages/Main/styles', () => ({
  Wrapper: vi.fn(({ children }) => <section>{children}</section>),
  SearchBox: vi.fn(({ handleSearch }) => <input data-testid="search-box" onClick={handleSearch} />),
  Discover: vi.fn(({ onClick }) => (
    <svg data-testid="discover" onClick={onClick} onKeyUp={onClick} />
  )),
}));
vi.mock('pages/Main/fragments/MainExplore', () => ({
  default: vi.fn(() => <div>MainExplore</div>),
}));
vi.mock('pages/Main/fragments/MainSearch', () => ({
  default: vi.fn(() => <div>MainSearch</div>),
}));
vi.mock('components/Footer', () => ({ default: vi.fn(() => <footer />) }));
vi.mock('components/ScrollToTop', () => ({ default: vi.fn(() => null) }));

describe('Main page index', () => {
  test('should render MainExplore as default', () => {
    render(<Main />);

    expect(screen.getByText('MainExplore')).toBeDefined();
  });
  test('should set new value and render MainSearch if there is query', () => {
    let searchQuery: string | null = null;
    const setSearch = vi.fn((q) => (searchQuery = q));
    vi.mocked(useState).mockImplementation(() => [searchQuery, setSearch]);
    vi.mocked(debounce).mockImplementationOnce((a) => () => a('test'));
    const { rerender } = render(<Main />);

    const searchBox = screen.getByTestId('search-box');
    fireEvent.click(searchBox);
    expect(setSearch).toBeCalledWith('test');

    rerender(<Main />);

    expect(screen.getByText('MainSearch')).toBeDefined();
    expect(searchQuery).toBe('test');
  });
  test('should scroll to content on mouse click or keyboard enter', () => {
    const scrollTo = vi.fn();
    global.scrollTo = scrollTo;
    render(<Main />);

    const discover = screen.getByTestId('discover');
    fireEvent.click(discover);
    fireEvent.keyUp(discover, { key: 'Enter' });
    expect(scrollTo).toBeCalledTimes(2);
  });
  test('should not scroll to content when keyboard not enter', () => {
    const scrollTo = vi.fn();
    global.scrollTo = scrollTo;
    render(<Main />);

    const discover = screen.getByTestId('discover');
    fireEvent.keyUp(discover, { key: 'Escape' });
    expect(scrollTo).toBeCalledTimes(0);
  });
});
