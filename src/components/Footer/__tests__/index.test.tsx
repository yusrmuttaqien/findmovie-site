import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '..';

vi.mock('components/Footer/styles', () => ({
  Wrapper: vi.fn(({ children }) => <footer>{children}</footer>),
}));

describe('Footer component index', () => {
  test('should render correctly', () => {
    render(<Footer />);

    expect(screen.getByText('Yusril Muttaqien - 2023')).toBeDefined();
  });
});
