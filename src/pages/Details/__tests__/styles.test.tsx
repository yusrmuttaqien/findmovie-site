import { describe, test, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Wrapper, Read, Link, Backdrop } from '../styles';
import theme from 'styles/index';
import 'jest-styled-components';

vi.mock('react-router-dom', () => ({ Link: vi.fn(() => <a />) }));

describe('Details page styles', () => {
  test('styled components should match snapshot', () => {
    const { asFragment: fWrapper } = render(<Wrapper theme={theme} />);
    const { asFragment: fRead } = render(<Read theme={theme} />);
    const { asFragment: fLink } = render(<Link to="#" theme={theme} />);
    const { asFragment: fBackdrop } = render(<Backdrop theme={theme} />);

    expect(fWrapper()).toMatchSnapshot();
    expect(fRead()).toMatchSnapshot();
    expect(fLink()).toMatchSnapshot();
    expect(fBackdrop()).toMatchSnapshot();
  });
});
