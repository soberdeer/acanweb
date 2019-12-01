import { createUseStyles } from 'react-jss';
import oc from 'open-color';
import { BREAKPOINTS } from '../../utils/constants';

export default createUseStyles({
  faq: {
    padding: [20, '15%'],
    display: 'flex',
    flexDirection: 'column',

    [`@media screen and (max-width: ${BREAKPOINTS.mobile}px)`]: {
      padding: 20,
    },
  },

  mainTitle: {
    paddingTop: 60,
  },

  description: {
    '& > *': { paddingTop: 20, }
  },

  varTitle: {
    padding: [10, 0],
    fontSize: 18,
    fontWeight: 600,
  },

  bold: {
    fontWeight: 600,
  },

  codeWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,

    '& span': {
      lineHeight: '35px',
    }
  },


  code: {
    position: 'relative',
    fontSize: 30,
    letterSpacing: '0.04em',
    backgroundColor: oc.gray[2],
    color: oc.gray[6],
    padding: [0, 3],
  },

  assort: {
    backgroundColor: oc.blue[2],
    color: oc.blue[8],
  },

  innerCode: {
    padding: [0, 3],
  },

  titleButton: {
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    padding: 0,
    margin: [10, 0],
    fontSize: 20,
    fontWeight: 600,
    cursor: 'pointer',
    textAlign: 'left',
    color: oc.blue[5],

    [`@media screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: 18,
    },
  },

  topic: {
    paddingBottom: 10,
    paddingTop: 20,
    paddingLeft: 24,
    paddingRight: 24,


    [`@media screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      paddingLeft: 10,
      paddingRight: 10,
    },
  }
});
