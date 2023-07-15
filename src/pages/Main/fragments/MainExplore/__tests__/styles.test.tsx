import { describe, test, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Wrapper, Group, Loading } from '../styles';
import theme from 'styles/index';
import 'jest-styled-components';

vi.mock('components/Loading', () => ({ default: vi.fn(() => <div />) }));

describe('Main page fragment: MainExplore styles', () => {
  test('styled components should match snapshot', () => {
    const { asFragment: fWrapper } = render(<Wrapper theme={theme} />);
    const { asFragment: fGroup } = render(<Group theme={theme} />);
    const { asFragment: fLoading } = render(<Loading theme={theme} />);

    expect(fWrapper()).toMatchSnapshot();
    expect(fGroup()).toMatchSnapshot();
    expect(fLoading()).toMatchSnapshot();
  });
});
