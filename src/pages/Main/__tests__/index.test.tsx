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
  test('should render default as intended', () => {
    render(<Main />);

    expect(screen.getByText('Find Movies')).toBeDefined();
    expect(screen.getByText('MainExplore')).toBeDefined();
  });
  test('should render MainSearch', () => {
    vi.mocked(useState).mockReturnValueOnce([true, vi.fn()]);
    render(<Main />);

    expect(screen.getByText('MainSearch')).toBeDefined();
  });
  test('should set new value to search state', () => {
    const setSearch = vi.fn();
    vi.mocked(useState).mockImplementationOnce(() => [null, setSearch]);
    vi.mocked(debounce).mockImplementationOnce((a) => (v) => a(v));
    render(<Main />);

    const searchBox = screen.getByTestId('search-box');
    fireEvent.click(searchBox);
    expect(setSearch).toBeCalled();
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
});
