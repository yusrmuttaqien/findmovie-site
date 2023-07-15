import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Pill from '..';

vi.mock('components/Pill/styles', () => ({
  Wrapper: vi.fn(({ children }) => <figure>{children}</figure>),
}));

describe('Pill component index', () => {
  test('should render children correctly', () => {
    render(<Pill>test</Pill>);

    expect(screen.getByText('test')).toBeDefined();
  });
});
