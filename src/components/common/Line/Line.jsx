import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import useStyles from './Line.styles';

export default function Line({
  className: componentClassName,
  componentProps,
  component: Component,
  children,
  ...others
}) {
  const classes = useStyles();
  const { className, ...rest } = componentProps || {};

  return (
    <div className={cx(classes.wrapper, componentClassName)} {...others}>
      <Component className={cx(classes.component, className)} {...rest}>
        {children}
      </Component>
    </div>
  );
}

Line.propTypes = {
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
};

Line.defaultProps = {
  className: null,
  component: 'div',
  children: null,
};
