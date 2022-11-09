import {
  extendTheme,
  theme as base,
  withDefaultVariant,
} from '@chakra-ui/react';

const theme = extendTheme(
  {
    fonts: {
      heading: `'Poppins', ${base.fonts?.heading}`,
      body: `'Poppins', ${base.fonts?.body}`,
    },
    colors: {
      brand: {},
    },
    styles: {
      global: {
        'html, body': {
          background: '#FBFBFB',
          color: '#303131',
          scrollBehavior: 'smooth',
        },
        a: {
          textDecoration: 'none',
        },
      },
    },

    breakpoints: {
      sm: '320px',
      md: '1180px',
      lg: '1300px',
      xl: '2000px',
    },
  },
  withDefaultVariant({
    variant: 'filled',
    components: ['Select'],
  })
);

export default theme;
