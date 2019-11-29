import { createUseStyles } from 'react-jss';

export default createUseStyles({
  subgroupContainer: {
    width: '100%',
    height: 'calc(100% - 50px)',

    minHeight: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  items: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: [50, 0],
  },
});
