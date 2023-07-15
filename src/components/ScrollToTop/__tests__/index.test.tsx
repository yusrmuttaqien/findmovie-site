import { describe, expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import ScrollToTop from '..';

describe('ScrollToTop component index', () => {
  test('should auto scroll to top on render', () => {
    const scrollTo = vi.fn();
    global.scrollTo = scrollTo;

    render(<ScrollToTop />);
    expect(scrollTo).toHaveBeenCalledWith(0, 0);
  });
});
