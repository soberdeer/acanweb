import { createUseStyles } from 'react-jss';
import oc from 'open-color';

export default createUseStyles({
  faqContainer: {
    width: '100%',
    height: 'calc(100% - 50px)',
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  faq: {
    padding: [30, '15%'],
    overflow: 'scroll',
  },

  title: {
    fontSize: 24,
    fontWeight: 600,
    color: oc.gray[7],
    paddingBottom: 20,
  },

  description: {
    color: oc.gray[7],

    '& *': {
      fontSize: 16,
    },

    '& span': {
      lineHeight: '24px',
    },
  },

  link: {
    color: oc.blue[5],
    textDecoration: 'none',
    cursor: 'pointer',
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
    color: oc.blue[5]
  },

  topic: {
    paddingBottom: 10,
  }
});
