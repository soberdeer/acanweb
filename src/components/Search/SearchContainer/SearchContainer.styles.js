import { createUseStyles } from 'react-jss';

export default createUseStyles({
  searchContainer: {
    width: '100%',
    height: 'calc(100% - 50px)',
    minHeight: 250,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  groupsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 200,
  },

  inner: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: [0, 50],
    paddingBottom: 50,
  },

  inputWrapper: {
    marginTop: 20,
  }
});
