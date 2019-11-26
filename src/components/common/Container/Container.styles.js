import oc from 'open-color';
import { createUseStyles } from 'react-jss';
import linear from '../../../utils/linear';

export default createUseStyles({
  container: {
    backgroundColor: oc.gray[0],
    width: '100vw',
    height: '100vh',
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
    fontWeight: 600,
    letterSpacing: 1.2,
  },
});
