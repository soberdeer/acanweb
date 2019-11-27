import { createUseStyles } from 'react-jss';

export default createUseStyles({
  container: {
    width: '100%',
    height: 'calc(100% - 50px)',
    minHeight: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  groupsContainer: {
    display: 'flex',
    height: '100%',
    width: 'calc(100% - 100px)',
    padding: [0, 50],
    overflow: 'scroll',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',

    '& > *': {
      margin: 20,
      opacity: 0,
      transition: 'opacity 200ms ease',
    },

    '& > div + div': {
      marginLeft: 20,
    }

  },
});
