import { createUseStyles } from 'react-jss';
import oc from 'open-color';
import { BREAKPOINTS } from "../../../utils/constants";

const color = oc.gray[5];

export default createUseStyles({
  noMatch: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',


    [`@media screen and (max-width: ${BREAKPOINTS.tablet}px) and (min-width: ${BREAKPOINTS.mobile + 1}px)`]: {
      width: '75%',
    },

    [`@media screen and (max-width: ${BREAKPOINTS.mobile}px)`]: {
      width: '100%',
    },
  },

  title: {
    fontSize: 80,
    fontWeight: 200,
    color,
  },

  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color,
    fontWeight: 600,
    padding: [20, 0],
  },

  description: {
    color,
    textAlign: 'center',
  },

  link: {
    textDecoration: 'none',
    color: oc.blue[5],
    cursor: 'pointer',
  },
});
