import oc from 'open-color';
import { createUseStyles } from 'react-jss';

export default createUseStyles({
  wrapper: {
    position: 'relative',

    '&:focus-within': {
      '& $chevron': {
        opacity: 1,
      },
    },
  },

  input: {
    boxSizing: 'border-box',
    fontFamily: 'Roboto, sans-serif',
    fontSize: 16,
    display: 'block',
    width: '100%',
    backgroundColor: oc.white,
    border: `1px solid ${oc.gray[5]}`,
    borderRadius: 3,
    padding: [8, 10],
    color: oc.gray[9],
    outline: 0,
    transition: 'box-shadow 100ms ease, border-color 100ms ease',
    resize: 'none',
    minHeight: 34,
    textAlign: 'left',

    '&:focus': {
      borderColor: 'transparent',
      outline: 0,
      boxShadow: `0 0 0 2px ${oc.indigo[3]}`,
    },

    '&::placeholder': {
      color: oc.gray[5],
      opacity: 1,
    },

    '&[disabled]': {
      cursor: 'not-allowed',
      backgroundColor: oc.gray[1],
      color: oc.gray[5],
    },
  },

  fixedHeight: {
    height: 34,
  },

  error: {
    borderColor: oc.red[5],
    color: oc.red[7],

    '&::placeholder': {
      color: oc.red[5],
      opacity: 1,
    },
  },

  buttonType: {
    cursor: 'pointer',
  },

  up: {
    '& $chevron': {
      transform: 'rotate(180deg)',
    },
  },

  chevron: {
    position: 'absolute',
    top: 8,
    right: 10,
    color: oc.gray[7],
    opacity: 0.5,
    transition: 'transform 100ms ease, opacity 100ms ease',
  },
});
