import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Pagination from '..';

vi.mock('components/Pagination/styles', () => ({
  Wrapper: vi.fn(({ children }) => <section>{children}</section>),
  Button: vi.fn(({ disabled, onClick, $isActive, children }) => (
    <button
      disabled={disabled}
      id={`${onClick ? 'true' : 'false'}-${$isActive ? 'active' : 'inactive'}`}
      data-testid={`${onClick ? 'true' : 'false'}-${$isActive ? 'active' : 'inactive'}`}
      data-active={$isActive}
      onClick={onClick}
    >
      {children}
    </button>
  )),
}));
vi.mock('assets/svgs', () => ({
  ArrowIcon: vi.fn(() => <svg />),
}));

describe('Pagination component index', () => {
  test('should disable both arrow & no other button when total page is 0', () => {
    render(<Pagination currentPage={1} totalPages={0} handleOnJump={() => () => {}} />);

    expect(screen.getAllByTestId('true-inactive').length).toBe(2);
    expect(screen.queryByTestId('1-inactive')).toBeNull();
    expect(screen.queryByTestId('...')).toBeNull();
  });
  test('should disable arrow left when currentPage is 1', () => {
    render(<Pagination currentPage={1} totalPages={10} handleOnJump={() => () => {}} />);

    expect(screen.getAllByTestId('false-inactive').length).toBe(1);
  });
  test('should disable arrow right when currentPage is last', () => {
    render(<Pagination currentPage={10} totalPages={10} handleOnJump={() => () => {}} />);

    expect(screen.getAllByTestId('false-inactive').length).toBe(1);
  });
  test('should render visibleCount correctly', () => {
    render(
      <Pagination currentPage={1} totalPages={10} visibleCount={5} handleOnJump={() => () => {}} />
    );

    expect(screen.getAllByTestId('true-active').length).toBe(1);
    expect(screen.getAllByTestId('true-inactive').length).toBe(6);
    expect(screen.getAllByTestId('false-inactive').length).toBe(1);
  });
  test('should render ellipsis correctly', () => {
    const { rerender } = render(
      <Pagination currentPage={1} totalPages={10} visibleCount={5} handleOnJump={() => () => {}} />
    );
    expect(screen.getAllByText('...').length).toBe(1);

    rerender(
      <Pagination currentPage={6} totalPages={10} visibleCount={5} handleOnJump={() => () => {}} />
    );
    expect(screen.getAllByText('...').length).toBe(2);

    rerender(
      <Pagination currentPage={10} totalPages={10} visibleCount={5} handleOnJump={() => () => {}} />
    );
    expect(screen.getAllByText('...').length).toBe(1);
  });
  test('should render active page correctly', () => {
    render(
      <Pagination currentPage={6} totalPages={10} visibleCount={5} handleOnJump={() => () => {}} />
    );
    expect(document.getElementById('true-active')?.textContent).toBe('6');
  });
  //   test('should call handleOnJump when navigating', () => {});
});
