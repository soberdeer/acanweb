import { createUseStyles } from 'react-jss';
import { BREAKPOINTS } from '../../../utils/constants';
import oc from 'open-color';

export default createUseStyles({
  text: {
    fontSize: 16,
    fontWeight: 400,
    color: oc.gray[7],
    fontFamily: 'Roboto, sans-serif',
    lineHeight: '24px',
    letterSpacing: '0.02em',
    hyphens: 'auto',

    '& *': {
      fontSize: 16,
      fontWeight: 400,
      color: oc.gray[7],
      fontFamily: 'Roboto, sans-serif',
      lineHeight: '24px',
      letterSpacing: '0.02em',
    },

    '& + &': {
      paddingTop: 10,
    },

    [`@media screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: 14,
      lineHeight: '20px',

      '& *': {
        fontSize: 14,
        lineHeight: '20px',
      },
    },
  },

  noHyphens: {
    hyphens: 'none'
  },
});
