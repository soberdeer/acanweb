import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import icons from '../../../assets';
import useStyles from './Container.styles';

export default function Container({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.nav}>
        <Link to="/" className={classes.link}>
          <icons.natural size={40} />
        </Link>
        <div className={classes.links}>
          <Link
            className={classes.link}
            to="/faq"
          >
            FAQ
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
