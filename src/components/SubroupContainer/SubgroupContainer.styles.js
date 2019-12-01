import { createUseStyles } from 'react-jss';
import oc from 'open-color';
import { BREAKPOINTS } from '../../utils/constants';

export default createUseStyles({
  subgroupContainer: {
    width: '100%',
    height: 'calc(100vh - 50px)',
    overflow: 'scroll',
    minHeight: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  items: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: [50, 0],
  },

  letteredSubgroups: {
    overflow: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 50,
    width: '70%',
    paddingLeft: '15%',
    paddingRight: '15%',

    '& > div:last-child': {
      paddingBottom: 50,
    },


    [`@media screen and (max-width: ${BREAKPOINTS.desktop}px) and (min-width: ${BREAKPOINTS.tablet + 1}px)`]: {
      width: '85%',
      paddingRight: '7.5%',
      paddingLeft: '7.5%',
    },

    [`@media screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      width: 'calc(100% - 40px)',
      paddingRight: 20,
      paddingLeft: 20,
    },
  },


  letteredSubgroup: {
    marginLeft: 20,
    border: '2px solid transparent',
    borderBottomColor: oc.gray[3],
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',

    '& + &': {
      paddingTop: 30,
    },

    [`@media screen and (max-width: ${BREAKPOINTS.mobile}px)`]: {
      flexDirection: 'column',
      marginLeft: 0,
      alignItems: 'center',
      borderBottomColor: 'transparent',
    },
  },

  letteredItems: {
    width: 'calc(100% - 40px)',
    paddingRight: 40,
    paddingBottom: 10,
    border: '1px solid transparent',
    borderTopColor: 'transparent',

    [`@media screen and (max-width: ${BREAKPOINTS.mobile}px)`]: {
      width: '100%',
      borderTopColor: oc.gray[3],
      paddingRight: 0,
      paddingTop: 30,
      paddingBottom: 0,
    },
  },

  itemsContainer: {
    minHeight: 'unset',
    paddingTop: 0,
  },

  letter: {
    color: oc.gray[5],
    fontSize: 20,
    width: 40,
    height: 40,
    maxHeight: 40,
    maxWidth: 40,

    [`@media screen and (max-width: ${BREAKPOINTS.mobile}px)`]: {
      width: 'unset',
      height: 'unset',
      maxHeight: 'unset',
      maxWidth: 'unset',
    },

  }

});
