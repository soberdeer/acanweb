import { createUseStyles } from 'react-jss';

export default createUseStyles({
  itemContainer: {
    width: 150,
    height: 150,
    maxHeight: 150,
    maxWidth: 150,
    margin: 20,
    cursor: 'pointer',


    '& + &': {
      marginLeft: 50,
    },
  },

  title: {
    fontSize: 18,
    fontWeight: 600,
  },
});
