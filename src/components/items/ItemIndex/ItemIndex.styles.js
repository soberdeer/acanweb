import { createUseStyles } from 'react-jss';
import oc from 'open-color';
import { BREAKPOINTS } from '../../../utils/constants';

export default createUseStyles({
  itemContainer: {
    width: '100%',
    height: 'calc(100vh - 50px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },

  backContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textDecoration: 'none',
    position: 'absolute',
    top: 0,
    left: '15%',
    marginTop: 20,
  },

  arrow: {
    color: oc.gray[5],
    marginRight: 20,

  },

  backText: {
    color: oc.gray[5],
    padding: 0,
    fontSize: 18,


    [`@media screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: 16,
    },

  },

  inner: {
    width: '70%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',


    [`@media screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      flexDirection: 'column',
      alignItems: 'center',
    },

    [`@media screen and (max-width: ${BREAKPOINTS.mobile}px)`]: {
      paddingTop: 70,
    },

  },

  icon: {
    marginTop: 0,
    height: 200,
    width: 200,
  },

  description: {
    paddingLeft: 40,

    [`@media screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      paddingLeft: 0,
      paddingTop: 20,
    },
  },


  subtitle: {
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 600,
    color: oc.gray[5],
    paddingBottom: 10,
  },

  title: {
    fontSize: 20,
    color: oc.gray[7],
    fontWeight: 600,
    paddingBottom: 10,
    lineHeight: '25px',
  },

  labels: {
    paddingBottom: 10,
  }
});
