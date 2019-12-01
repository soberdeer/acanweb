import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Text from '../Text/Text';
import useStyles from './Title.styles';

export default function Title({ children, component, className, ...others }) {
  const classes = useStyles();

  return (
    <Text className={cx(classes.title, className)} component={component} {...others}>
      {children}
    </Text>
  );
}

Title.propTypes = {
  children: PropTypes.node,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

Title.defaultProps = {
  children: null,
  component: 'div',
};

