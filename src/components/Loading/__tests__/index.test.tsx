import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Loading from '..';

vi.mock('components/Loading/styles', () => ({
  Wrapper: vi.fn(({ children, className }) => <div data-testid={className}>{children}</div>),
}));

describe('Loading component index', () => {
  test('should render correctly with class', () => {
    render(<Loading className="test" />);

    expect(screen.getByTestId('test')).toBeDefined();
  });
});
