import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Wrapper, SearchIcon } from '../styles';
import theme from 'styles/index';
import 'jest-styled-components';

describe('SearchBox component styles', () => {
  test('styled components should match snapshot', () => {
    const { asFragment: fWrapper } = render(<Wrapper theme={theme} />);
    const { asFragment: fSearchIcon } = render(<SearchIcon theme={theme} />);

    expect(fWrapper()).toMatchSnapshot();
    expect(fSearchIcon()).toMatchSnapshot();
  });
});
