import { describe, test, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Wrapper, Link, Backdrop } from '../styles';
import theme from 'styles/index';
import 'jest-styled-components';

vi.mock('react-router-dom', () => ({
  Link: vi.fn(() => <a />),
}));

describe('ContentCard component styles', () => {
  test('styled components should match snapshot', () => {
    const { asFragment: fWrapper } = render(<Wrapper theme={theme} />);
    const { asFragment: fLinkDisable } = render(<Link to="#" theme={theme} />);
    const { asFragment: fLinkEnable } = render(<Link to="test" theme={theme} />);
    const { asFragment: fBackdrop } = render(<Backdrop $placeholder={['a', 'b']} theme={theme} />);

    expect(fWrapper()).toMatchSnapshot();
    expect(fLinkDisable()).toMatchSnapshot();
    expect(fLinkEnable()).toMatchSnapshot();
    expect(fBackdrop()).toMatchSnapshot();
  });
});
