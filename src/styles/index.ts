import { createGlobalStyle } from 'styled-components';

export default {
  colors: {
    black: {
      50: 'rgba(0, 0, 0, 0.5)',
      100: 'rgb(0, 0, 0)',
    },
    white: {
      10: 'rgba(199, 199, 199, 0.1)',
      50: 'rgba(199, 199, 199, 0.5)',
      100: 'rgb(199, 199, 199)',
    },
  },
  screen: {
    mobile: '319',
    tablet: {
      min: '520',
      max: '768',
    },
    desktop: '1279',
  },
  space: {
    x: {
      mobile: '1.875rem',
      desktop: '5.5rem',
    },
  },
};

export const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Plus Jakarta Sans';
  margin: 0;
  padding: 0;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  /* width */
  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.white[10]};
  }
  
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.white[50]};
  }
}

html {
  background-color: ${({ theme }) => theme.colors.black[100]};
  color: ${({ theme }) => theme.colors.white[100]};
  font-size: calc(100vw * 16 / ${({ theme }) => theme.screen.mobile});

  a {
    color: ${({ theme }) => theme.colors.white[100]};
  }

  @media (prefers-color-scheme: light) {
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.tablet.min}px) {
    font-size: calc(100vw * 16 / ${({ theme }) => theme.screen.tablet.min});
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}px) {
    font-size: calc(100vw * 16 / ${({ theme }) => theme.screen.desktop});
  }
}
`;
