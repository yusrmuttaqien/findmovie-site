import { vi } from 'vitest';

export * from 'react';
export const useEffect = vi.fn((fn) => fn());
export const useRef = vi.fn(() => ({
  current: {},
}));
export const useState = vi.fn((v) => [v, vi.fn()]);
