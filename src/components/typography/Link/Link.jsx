import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Text from '../Text/Text';
import useStyles from './Link.styles';

export default function Link({ children, component, className, ...others }) {
  const classes = useStyles();

  return (
    <Text className={cx(classes.link, className)} component={component} {...others}>
      {children}
    </Text>
  );
}

Link.propTypes = {
  children: PropTypes.node,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

Link.defaultProps = {
  children: null,
  component: 'a',
};

