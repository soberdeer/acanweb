import { createUseStyles } from 'react-jss';
import oc from 'open-color';

const color = oc.gray[5];

export default createUseStyles({
  noMatch: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 80,
    fontWeight: 200,
    color,
  },

  subtitle: {
    fontSize: 18,
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
