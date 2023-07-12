import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider, StyleSheetManager } from 'styled-components';
import Main from 'pages/Main';
import theme, { GlobalStyle } from 'styles/index';
import '@fontsource/plus-jakarta-sans/200.css';
import '@fontsource/plus-jakarta-sans/400.css';
import '@fontsource/plus-jakarta-sans/500.css';
import '@fontsource/plus-jakarta-sans/800.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <StyleSheetManager shouldForwardProp={() => true}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Main />
        </ThemeProvider>
      </StyleSheetManager>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
