import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Wrapper } from '../styles';
import theme from 'styles/index';
import 'jest-styled-components';

describe('Details page fragment: MovieDetail styles', () => {
  test('styled components should match snapshot', () => {
    const { asFragment: fWrapper } = render(<Wrapper theme={theme} />);

    expect(fWrapper()).toMatchSnapshot();
  });
});
