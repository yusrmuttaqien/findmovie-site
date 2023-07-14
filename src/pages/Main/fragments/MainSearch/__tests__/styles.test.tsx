import { describe, test, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import {
  Wrapper,
  Group,
  Loading,
  Pagination,
  Avatar,
} from 'pages/Main/fragments/MainSearch/styles';
import theme from 'styles/index';
import 'jest-styled-components';

vi.mock('components/Loading', () => ({ default: vi.fn(() => <div />) }));
vi.mock('components/Pagination', () => ({ default: vi.fn(() => <div />) }));
vi.mock('components/Avatar', () => ({ default: vi.fn(() => <figure />) }));

describe('Main page fragment: MainSearch styles', () => {
  test('styled components should match snapshot', () => {
    const { asFragment: fWrapper } = render(<Wrapper theme={theme} />);
    const { asFragment: fGroup } = render(<Group theme={theme} />);
    const { asFragment: fLoading } = render(<Loading theme={theme} />);
    // @ts-expect-error
    const { asFragment: fPagination } = render(<Pagination theme={theme} />);
    // @ts-expect-error
    const { asFragment: fAvatar } = render(<Avatar theme={theme} />);

    expect(fWrapper()).toMatchSnapshot();
    expect(fGroup()).toMatchSnapshot();
    expect(fLoading()).toMatchSnapshot();
    expect(fPagination()).toMatchSnapshot();
    expect(fAvatar()).toMatchSnapshot();
  });
});
