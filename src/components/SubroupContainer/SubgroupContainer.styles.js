import { createUseStyles } from 'react-jss';
import oc from 'open-color';

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

  letteredSubgroups: {
    overflow: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 50,
    width: '70%',

    '& > div:last-child': {
      paddingBottom: 50,
    }
  },


  letteredSubgroup: {
    marginLeft: 20,
    border: '2px solid transparent',
    borderBottomColor: oc.gray[3],
    display: 'flex',
    alignItems: 'flex-start',

    '& + &': {
      paddingTop: 30,
    },
  },

  letteredItems: {
    width: 'calc(100% - 40px)',
    paddingRight: 40,
    paddingBottom: 10,
  },

  itemsContainer: {
    minHeight: 'unset',
  },

  letter: {
    color: oc.gray[5],
    fontSize: 20,
    width: 40,
    height: 40,
    maxHeight: 40,
    maxWidth: 40,
  }

});
