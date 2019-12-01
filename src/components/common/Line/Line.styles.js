import { createUseStyles } from 'react-jss';
import oc from 'open-color';
import { BREAKPOINTS } from '../../../utils/constants';

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
    justifyContent: 'space-between',
    alignItems: 'center',


    [`@media screen and (max-width: ${BREAKPOINTS.mobile}px)`]: {
      padding: [0, 10],
    },
  },

  code: {
    display: 'flex',
    paddingTop: [0, '!important'],
    fontWeight: 600,
    color: oc.gray[5],
    marginLeft: 20,
    alignItems: 'center',
  }
});
