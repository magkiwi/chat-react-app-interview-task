import React from "react";
import { Root } from "views/Root";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { WebSocketContextProvider } from 'contexts';
import { muiTheme } from 'shared/styles/muiTheme';

function App() {

  const theme = muiTheme();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 360000, // 6 minutes
      },
    },
  });

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <WebSocketContextProvider> 
            <ThemeProvider theme={theme}>
              <CssBaseline>
                <Root/>
              </CssBaseline>
            </ThemeProvider>
        </WebSocketContextProvider>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
