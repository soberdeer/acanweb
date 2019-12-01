import oc from 'open-color';
import { createUseStyles } from 'react-jss';
import linear from '../../../utils/linear';
import { BREAKPOINTS } from "../../../utils/constants";

export default createUseStyles({
  container: {
    backgroundColor: oc.gray[0],
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
  },

  nav: {
    width: 'calc(100% - 60px)',
    background: linear('rgba(30,214,193,1)', 'rgba(150,145,242,1)'),
    backgroundColor: oc.gray[7],
    height: 50,
    padding: [0, 30],
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  link: {
    textDecoration: 'none',
    cursor: 'pointer',
    color: 'white',
    fill: 'white',
    fontWeight: 600,
    letterSpacing: 1.2,
    display: 'flex',
    transition: 'color 200ms ease, fill 200ms ease',

    '& + &': {
      marginLeft: 20,
    },

    '&:hover': {
      color: oc.teal[1],
      fill: oc.teal[1]
    },
  },

  content: {
    width: '100%',
    height: 'calc(100% - 50px)',
    overflow: 'scroll',
  },

  innerContent: {
    maxWidth: 992,
    margin: [0, 'auto'],
    display: 'flex',
    alignContent: 'flex-start',

    [`@media screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      margin: 'unset',
    },
  },
});
