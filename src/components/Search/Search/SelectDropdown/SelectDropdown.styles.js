import oc from 'open-color';
import { createUseStyles } from 'react-jss';

export const TRANSITION_DURATION = 250;

const inState = {
  opacity: 1,
  transform: 'scaleY(1) translateY(0)',
};

const outState = {
  opacity: 0,
  transform: 'scaleY(0) translateY(-40px)',
};

export default createUseStyles({
  dropdown: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 5,
    backgroundColor: oc.white,
    transformOrigin: 'top',
    borderRadius: 3,
    boxShadow: `0 8px 16px rgba(0,0,0,0.05),
                0 16px 32px rgba(0,0,0,0.05),
                0 32px 64px rgba(0,0,0,0.05)`,
    transition: `opacity ${TRANSITION_DURATION}ms ease, transform ${TRANSITION_DURATION}ms ease`,
    border: `1px solid ${oc.gray[3]}`,
    overflow: 'hidden',
  },

  search: {
    position: 'relative',
  },

  nothingFound: {
    padding: 5,
    color: oc.gray[5],
  },

  enter: outState,
  enterActive: inState,
  leave: inState,
  leaveActive: outState,
});
