import { createUseStyles } from 'react-jss';
import oc from 'open-color';
import { BREAKPOINTS } from '../../../utils/constants';

export default createUseStyles({
  searchContainer: {
    margin: [0, 'auto'],
  },

  groupsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    height: '25vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',

    [`@media screen and (max-width: ${BREAKPOINTS.mobile}px)`]: {
      height: '20vh',
    },
  },

  title: {
    fontSize: 60,
    fontWeight: 600,
    lineHeight: 'normal',
    color: oc.cyan[3],
    paddingBottom: 0,

    [`@media screen and (max-width: ${BREAKPOINTS.mobile}px)`]: {
      fontSize: 40,
    },
  },

  subtitle: {
    fontSize: 20,
    fontWeight: 600,
    color: oc.gray[5],

    [`@media screen and (max-width: ${BREAKPOINTS.mobile}px)`]: {
      fontSize: 18,
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',

  },

  inputWrapper: {
    marginTop: 20,
  }
});
