import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Title from '../../typography/Title/Title';
import Text from '../../typography/Text/Text';
import useStyles from './Line.styles';

export default function Line({
  className: componentClassName,
  componentProps,
  component: Component,
  icon: code,
  children,
  ...others
}) {
  const classes = useStyles();
  const { className, ...rest } = componentProps || {};

  return (
    <div className={cx(classes.wrapper, componentClassName)} {...others}>
      <Component className={cx(classes.component, className)} {...rest}>
        <Title style={{ paddingBottom: 0 }}>
          {children}
        </Title>
        <Text className={classes.code}>{code}</Text>
      </Component>
    </div>
  );
}

Line.propTypes = {
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  name: PropTypes.node,
  icon: PropTypes.string,
};

Line.defaultProps = {
  className: null,
  component: 'div',
  name: null,
  icon: null,
};
