import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import icons from '../../../assets';
import useStyles from './Card.styles';

export default function Card({
  className: componentClassName,
  icon,
  size,
  componentProps,
  component: Component,
  children,
  ...others
}) {
  const classes = useStyles();
  const { className, ...rest } = componentProps || {};
  const Icon = icons[icon] || icons.natural;

  return (
    <div className={cx(classes.wrapper, componentClassName)} {...others}>
      <Component className={cx(classes.component, className)} {...rest}>
        {icon && (
          <div className={classes.iconContainer} style={{ width: size, height: size }}>
            <Icon size={size} />
          </div>
        )}
        {children}
      </Component>
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
};

Card.defaultProps = {
  className: null,
  component: 'div',
  size: 18,
  children: null,
};
