import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import icons from '../../../assets';
import useStyles from './Container.styles';

export default function Container({ noScroll, children }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.nav}>
        <Link to="/" className={classes.link} style={{ fill: 'black' }}>
          <icons.natural size={40} />
        </Link>
        <div className={classes.links}>
          <Link
            className={classes.link}
            to="/faq"
          >
            FAQ
          </Link>

          <a
            className={classes.link}
            href="https://github.com/soberdeer/"
            target="_blank"
          >
            <icons.github className={classes.link} />
          </a>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.innerContent}>
          {children}
        </div>
      </div>
    </div>
  );
}

Container.propTypes = {
  noScroll: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  noScroll: false,
};
