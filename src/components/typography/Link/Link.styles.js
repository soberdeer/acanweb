import { createUseStyles } from 'react-jss';
import oc from 'open-color';

export default createUseStyles({
  link: {
    color: oc.blue[5],
    cursor: 'pointer',
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'color 200ms ease',

    '&:hover': {
      color: oc.blue[8],
    },
  },
});
