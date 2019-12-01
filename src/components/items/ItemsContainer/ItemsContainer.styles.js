import { createUseStyles } from 'react-jss';
import { BREAKPOINTS } from '../../../utils/constants';

export default createUseStyles({
  itemsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  groupsContainer: {
    display: 'flex',
    width: '100%',
    padding: [30, 0],
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',

    '& > *': {
      opacity: 0,
      transition: 'opacity 200ms ease',
    },

    '& > div + div': {
      marginLeft: 20,
    },
  },
});
