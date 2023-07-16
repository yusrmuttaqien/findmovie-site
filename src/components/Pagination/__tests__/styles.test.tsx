import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Wrapper, Button } from '../styles';
import theme from 'styles/index';
import 'jest-styled-components';

describe('Pagination component styles', () => {
  test('styled components should match snapshot', () => {
    const { asFragment: fWrapper } = render(<Wrapper theme={theme} />);
    const { asFragment: fButton } = render(<Button theme={theme} />);
    const { asFragment: fButtonActive } = render(<Button $isActive theme={theme} />);

    expect(fWrapper()).toMatchSnapshot();
    expect(fButton()).toMatchSnapshot();
    expect(fButtonActive()).toMatchSnapshot();
  });
});
