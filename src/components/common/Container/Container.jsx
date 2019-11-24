import React from 'react';
import PropTypes from 'prop-types';
import icons from '../../../assets';
import useStyles from './Container.styles';

export default function Container({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.nav}>
        <icons.Logo size={40} />
        <div className={classes.links}>
          <a
            className={classes.link}
            href="#"
            target="_self"
          >
            Link
          </a>
        </div>
      </div>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
