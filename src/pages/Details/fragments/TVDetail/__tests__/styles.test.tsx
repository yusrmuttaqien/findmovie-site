import { describe, test, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Wrapper, ContentCard } from '../styles';
import theme from 'styles/index';
import 'jest-styled-components';

vi.mock('components/ContentCard', () => ({ default: vi.fn(() => <figure />) }));

describe('Details page fragment: TVDetail styles', () => {
  test('styled components should match snapshot', () => {
    const { asFragment: fWrapper } = render(<Wrapper theme={theme} />);
    // @ts-expect-error
    const { asFragment: fContentCard } = render(<ContentCard theme={theme} />);

    expect(fWrapper()).toMatchSnapshot();
    expect(fContentCard()).toMatchSnapshot();
  });
});
