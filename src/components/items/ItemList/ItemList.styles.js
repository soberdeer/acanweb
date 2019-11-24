import { createUseStyles } from 'react-jss';
import oc from 'open-color';

export default createUseStyles({
  itemListContainer: {
    width: '70%',
    cursor: 'pointer',
  },

  itemContent: {
    padding: 10,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },

  topData: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  label: {
    textTransform: 'uppercase',
    fontSize: 12,
    backgroundColor: oc.red[3],
    borderRadius: 14,
  },
});
