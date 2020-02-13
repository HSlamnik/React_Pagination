import { createMuiTheme } from '@material-ui/core/styles';

export const palette = {
  primary: {
    main: '#1D7874',
    contrastText: '#fff',
  },
  secondary: {
    main: '#51A600',
    dark: '#007E70',
    contrastText: '#fff',
  },
  background: {
    paper: '#fff',
    default: '#EEEEEE',
  },
  text: {
    primary: '#414141',
    secondary: '#B6B6B6',
    disabled: '#c6d0d7',
    hint: '#0b4c7b',
  },
  common: {
    black: '#000',
    white: '#fff',
  },
  divider: '#fff',
};

export const typography = {
  useNextVariants: true,
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontSize: 14,
  h5: {
    fontSize: '1.71rem',
    fontWeight: 600,
  },
  subtitle1: {
    fontSize: '1rem',
  },
  caption: {
    fontSize: '0.85rem',
  },
  button: {
    fontSize: '14px',
  },
};

export const props = {
  menuSelection: {
    main: '#08012f',
    light: '#393358',
  },
  background: {
    primary: '#d7d7d7',
    secondary: '#eeeeee',
  },
};

// move buttons and icons under props so it avaiable when used withTheme
export const buttons = {
  primary: {
    backgroundColor: '#00a651',
    backgroundColorHover: '#387400',
    color: '#fff',
  },
  secondary: {
    backgroundColor: '#ed1c24',
    backgroundColorHover: '#871b1f',
    color: '#fff',
  },
  default: {
    backgroundColor: '#e0e0e0',
    color: '#fff',
  },
};

export const icons = {
  default: {
    color: '#757575',
  },
  primary: {
    color: '#efb835',
  },
};

export const getCustomMuiTheme = () => {
  const theme = createMuiTheme({
    palette: palette,
    typography: typography,
    props: props,
    overrides: {
      MuiInput: {
        underline: {
          '&:after': {
            borderBottomColor: palette.secondary.dark,
          },
        },
      },
      MuiFormLabel: {
        root: {
          '&$focused': {
            color: palette.secondary.dark,
          },
        },
      },
    },
  });

  return theme;
};
