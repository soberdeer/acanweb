import { createUseStyles } from 'react-jss';

export default createUseStyles({
  searchContainer: {
    width: '100%',
    height: 'calc(100% - 50px)',
    minHeight: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  groupsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > div + div': {
      marginLeft: 10,
      marginTop: 10,
    }
  },
});
