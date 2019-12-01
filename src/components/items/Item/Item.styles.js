import oc from 'open-color';
import { createUseStyles } from 'react-jss';
import { BREAKPOINTS } from '../../../utils/constants';

export default createUseStyles({
  itemContainer: {
    margin: 20,
    cursor: 'pointer',
    textDecoration: 'none',


    [`@media screen and (max-width: ${BREAKPOINTS.mobile}px)`]: {
      margin: 10,
    },
  },

  title: {
    fontSize: 18,
    fontWeight: 600,
    textAlign: 'center',
    width: '100%',


    [`@media screen and (max-width: ${BREAKPOINTS.mobile}px)`]: {
      fontSize: 16,
    },
  },

  small: {
    marginTop: 0,

    '& + &': {
      marginTop: 20,
    },


    [`@media screen and (max-width: ${BREAKPOINTS.mobile}px)`]: {
      margin: 0,
    },
  },
});
