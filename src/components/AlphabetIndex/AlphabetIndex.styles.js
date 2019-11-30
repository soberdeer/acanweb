import { createUseStyles } from 'react-jss';
import oc from 'open-color';

export default createUseStyles({
  alphabet: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },

  char: {
    color: oc.gray[5],
    textTransform: 'uppercase',
    textDecoration: 'none',
    border: 0,
    backgroundColor: 'transparent',
    padding: 5,
    fontSize: 18,
    fontWeight: 600,
    margin: 0,
    cursor: 'pointer',
    outline: 'none',

    '& + &': {
      marginLeft: 10,
    }
  },

  current: {
    color: oc.gray[9],
    pointerEvents: 'none',
  }
});
