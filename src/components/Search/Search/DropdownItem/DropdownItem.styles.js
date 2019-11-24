import oc from 'open-color';
import { createUseStyles } from 'react-jss';

export default createUseStyles({
  dropdownItem: {
    display: 'flex',
    outline: 0,
    width: '100%',
    cursor: 'pointer',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    minHeight: 25,
    border: '1px solid transparent',
    borderBottomColor: oc.gray[3],
    paddingTop: 5,

    '&:hover': {
      backgroundColor: oc.gray[1],
    },

    '&:last-child': {
      borderBottomColor: 'transparent',
    }
  },

  text: {
    fontSize: 14,
  },

  name: {
    width: 'calc(100% - 30px)',
    paddingRight: 5,
    textAlign: 'left',
  },

  code: {
    width: 30,
  },
});
