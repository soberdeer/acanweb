import oc from 'open-color';
import { createUseStyles } from 'react-jss';

export default createUseStyles({
  itemContainer: {
    width: 150,
    height: 150,
    maxHeight: 150,
    maxWidth: 150,
    margin: 20,
    cursor: 'pointer',
    textDecoration: 'none',
  },

  title: {
    fontSize: 18,
    fontWeight: 600,
    color: oc.gray[9],
    textAlign: 'center',
  },
});
