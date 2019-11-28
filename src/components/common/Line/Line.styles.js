import { createUseStyles } from 'react-jss';

export default createUseStyles({
  wrapper: {
    backgroundColor: '#fff',
    overflow: 'hidden',
    boxShadow: '0 1px 2px 0 rgba(194,194,194,0.5)',
    borderRadius: 2,
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
  },

  component: {
    outline: 'none',
    border: 'none',
    backgroundColor: 'transparent',
    display: 'flex',
    padding: [ 0, 20 ],
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
