import { createUseStyles } from 'react-jss';
import oc from 'open-color';
import { BREAKPOINTS } from '../../utils/constants';

export default createUseStyles({
  alphabet: {
    width: 'calc(100% - 40px)',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingBottom: 0,
  },

  char: {
    color: oc.gray[5],
    textTransform: 'uppercase',
    textDecoration: 'none',
    border: 0,
    backgroundColor: 'transparent',
    padding: 5,
    margin: 5,
    fontSize: 18,
    fontWeight: 600,
    cursor: 'pointer',
    outline: 'none',
    transition: 'color 200ms ease',

    '&:hover': {
      color: oc.gray[7],
    },

    [`@media screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: 16,
    },

    [`@media screen and (max-width: ${BREAKPOINTS.mobile + 60}px)`]: {
      padding: 0,
    },
  },

  current: {
    color: oc.gray[9],
    pointerEvents: 'none',
  }
});
