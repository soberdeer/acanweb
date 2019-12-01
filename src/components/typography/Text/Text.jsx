import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames'
import useStyles from './Text.styles';

export default function Text({ children, component: Component, className, noHyphens, ...others }) {
  const classes = useStyles();

  return (
    <Component lang="ru" className={cx(classes.text, { [classes.noHyphens]: noHyphens }, className)} {...others}>
      {children}
    </Component>
  );
}

Text.propTypes = {
  children: PropTypes.node,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  noHyphens: PropTypes.bool,
};

Text.defaultProps = {
  children: null,
  component: 'div',
  noHyphens: false
};

