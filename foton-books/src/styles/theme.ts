export default {
  border: {
    radius: '5px'
  },
  font: {
    family: 'SFProText, -apple-system, BlinkMacSystemFont, Roboto, sans-serif',
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xxsmall: '0.625rem',
      xsmall: '0.75rem',
      small: '0.875rem',
      normal: '1rem',
      large: '1.125rem',
      xlarge: '1.5rem'
    }
  },
  colors: {
    primary: '#FF6978',
    secondary: '#4ABDF1'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
} as const;