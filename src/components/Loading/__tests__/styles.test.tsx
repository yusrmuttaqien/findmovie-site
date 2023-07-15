import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Wrapper } from '../styles';
import theme from 'styles/index';
import 'jest-styled-components';

describe('Loading component styles', () => {
  test('styled components should match snapshot', () => {
    const { asFragment: fWrapper } = render(<Wrapper theme={theme} />);

    expect(fWrapper()).toMatchSnapshot();
  });
});
