import { createUseStyles } from 'react-jss';
import oc from 'open-color';
import { BREAKPOINTS } from '../../../utils/constants';

export default createUseStyles({
  title: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: '32px',
    color: oc.gray[7],
    paddingBottom: 20,

    [`@media screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: 20,
      lineHeight: '26px',
      paddingBottom: 10,
    },
  },

});
