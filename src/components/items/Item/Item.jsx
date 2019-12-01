import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import Text from '../../typography/Text/Text'
import Card from '../../common/Card/Card';
import Line from '../../common/Line/Line';
import useStyles from './Item.styles';

export default function Item({ icon, size, title, link, children, small, ...others }) {
  const classes = useStyles();
  const Component = small ? Line : Card;

  const style = small ? { width: '60%' } : { padding: 20 };

  return (
    <Link
      to={link}
      className={cx(classes.itemContainer, { [classes.small]: small })}
      style={style}
      {...others}
    >
      <Component icon={icon} size={!small ? size : undefined}>
        {title && (
          <Text className={classes.title} style={{ textAlign: small ? 'left' : 'center' }}>
            {title}
          </Text>
        )}
        {children}
      </Component>
    </Link>
  );
}

Item.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  size: PropTypes.number,
  small: PropTypes.bool,
  children: PropTypes.node,
};

Item.defaultTypes = {
  icon: null,
  size: 70,
  title: null,
  link: '',
  small: false,
  children: null,
};
