import { describe, expect, test, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchBox from '..';

vi.mock('components/SearchBox/styles', () => ({
  Wrapper: vi.fn(({ children }) => <div>{children}</div>),
  SearchIcon: vi.fn(({ onClick }) => <svg data-testid="search-icon" onClick={onClick} />),
}));

describe('SearchBox component index', () => {
  test('should not call handleSearch when isRealtime is false', () => {
    const handleSearch = vi.fn();

    render(<SearchBox handleSearch={handleSearch} />);

    const inputEl = document.getElementsByTagName('input')[0];
    fireEvent.change(inputEl, { target: { value: 'test' } });

    expect(handleSearch).not.toHaveBeenCalled();
  });
  test('should call handleSearch automatically when isRealtime is true', () => {
    const handleSearch = vi.fn();

    render(<SearchBox handleSearch={handleSearch} isRealtime />);

    const inputEl = document.getElementsByTagName('input')[0];
    fireEvent.change(inputEl, { target: { value: 'test' } });

    expect(handleSearch).toBeCalledWith('test');
  });
  test('should call handleSearch when type, mouse click, and keyboard enter', () => {
    const handleSearch = vi.fn();

    const { rerender } = render(<SearchBox handleSearch={handleSearch} isRealtime />);

    const inputEl = document.getElementsByTagName('input')[0];
    const searchIconEl = screen.getByTestId('search-icon');
    fireEvent.change(inputEl, { target: { value: 'test' } });

    rerender(<SearchBox handleSearch={handleSearch} isRealtime />);

    fireEvent.keyUp(inputEl, { key: 'Enter' });
    fireEvent.click(searchIconEl);
    expect(handleSearch).toBeCalledTimes(3);
  });
  test('should not call handleSearch when keyboard other than enter', () => {
    const handleSearch = vi.fn();

    render(<SearchBox handleSearch={handleSearch} isRealtime />);

    const inputEl = document.getElementsByTagName('input')[0];
    fireEvent.keyUp(inputEl, { key: 'Escape' });

    expect(handleSearch).toBeCalledTimes(0);
  });
});
