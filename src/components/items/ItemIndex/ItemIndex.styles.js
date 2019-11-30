import { createUseStyles } from 'react-jss';
import oc from 'open-color';

export default createUseStyles({
  itemContainer: {
    width: '100%',
    height: 'calc(100% - 50px)',
    minHeight: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  inner: {
    width: '70%',
    display: 'flex',
    justifyContent: 'center',
  },

  icon: {
    marginTop: 0,
    height: 200,
    width: 200,
  },

  description: {
    paddingLeft: 40,
  },


  subtitle: {
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 600,
    color: oc.gray[5],
    paddingBottom: 10,
  },

  title: {
    fontSize: 20,
    color: oc.gray[7],
    fontWeight: 600,
    paddingBottom: 10,
    lineHeight: '25px',
  },

  labels: {
    paddingBottom: 10,
  }
});
