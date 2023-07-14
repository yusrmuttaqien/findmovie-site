import { describe, test, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Wrapper, Discover, SearchBox } from 'pages/Main/styles';
import theme from 'styles/index';
import 'jest-styled-components';

vi.mock('components/SearchBox', () => ({ default: vi.fn(() => null) }));

describe('Main page styles', () => {
  test('styled components should match snapshot', () => {
    const { asFragment: fWrapper } = render(<Wrapper theme={theme} />);
    const { asFragment: fDiscover } = render(<Discover theme={theme} />);
    const { asFragment: fSearchbox } = render(<SearchBox theme={theme} />);

    expect(fWrapper()).toMatchSnapshot();
    expect(fDiscover()).toMatchSnapshot();
    expect(fSearchbox()).toMatchSnapshot();
  });
});
