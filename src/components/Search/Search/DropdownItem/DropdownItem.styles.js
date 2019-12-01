import oc from 'open-color';
import { createUseStyles } from 'react-jss';
import { BREAKPOINTS } from "../../../../utils/constants";

export default createUseStyles({
  dropdownItem: {
    display: 'flex',
    outline: 0,
    width: '100%',
    cursor: 'pointer',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    minHeight: 25,
    border: '1px solid transparent',
    borderBottomColor: oc.gray[3],
    paddingTop: 5,

    '&:hover': {
      backgroundColor: oc.gray[1],
    },

    '&:last-child': {
      borderBottomColor: 'transparent',
    }
  },

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

    [`@media screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: 14,
      lineHeight: '20px',

      '& *': {
        fontSize: 14,
        lineHeight: '20px',
      },
    },
  },

  name: {
    width: 'calc(100% - 30px)',
    paddingRight: 5,
    textAlign: 'left',
  },

  code: {
    width: 30,
    fontWeight: 600,
    color: oc.gray[7],

    '& > *': {
      fontWeight: 600,
      color: oc.gray[7],
    },
  },
});
