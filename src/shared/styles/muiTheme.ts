import { grey } from '@mui/material/colors';
import { createTheme, ThemeOptions, responsiveFontSizes } from '@mui/material/styles';


export const themePalette = {
    palette: {
      primary: {
        light: '#7e6fb1',
        main: '#7e6fb1',
      },
      secondary: {
        light: '#DB7245',
        main: '#DB7245',
      },
      success: {
        main: '#ADFFB5',
      },
      error: {
        main: '#FF7777',
      },
    },
  };

  export const defaultTheme = responsiveFontSizes(createTheme({}));


  export const baseTheme: ThemeOptions = {
    typography: {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
    },
    palette: {
      ...themePalette.palette,
    },
    shape: {
      borderRadius: 4,
    },
  
    components: {
      MuiTypography: {
        styleOverrides: {
          h1: {
            fontWeight: 700,
            fontSize: '28px',
          },
          body2: {
            color: grey['400'],
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
          fullWidth: true,
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            width: '80vw',
            height: '70vh',
            overflowY: "scroll",
            marginTop: '30px'
          }
        }
      },
      MuiGrid: {
        styleOverrides: {
          root: {
            display: 'flex',
            flexDirection: 'row'
          },
        },
      },
      MuiCardHeader: {
        styleOverrides: {
          root: {
            paddingTop: '0',
            paddingRight: '0',
            paddingLeft: '0',
          },
       
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            height: '80%'
          },
       
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            minWidth: '40vw',
            padding: 1,
          }
        }
      },
    },
  };
  
  export const theme = () => createTheme(baseTheme);
  
  
  export const muiTheme = theme;