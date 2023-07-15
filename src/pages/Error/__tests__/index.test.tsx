import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useRouteError } from 'react-router-dom';
import Error from '..';

vi.mock('react-router-dom');
vi.mock('pages/Error/styles', () => ({
  Wrapper: vi.fn(({ children }) => <main>{children}</main>),
}));

describe('Error page index', () => {
  test('should render status number, when status is not defined yet', () => {
    vi.mocked(useRouteError).mockImplementationOnce(() => ({ status: 111 }));

    render(<Error />);

    expect(screen.getByText('111')).toBeDefined();
  });
  test('should render 404 message', () => {
    vi.mocked(useRouteError).mockImplementationOnce(() => ({ status: 404 }));

    render(<Error />);

    expect(screen.getByText('404 • Page not found')).toBeDefined();
  });
});
