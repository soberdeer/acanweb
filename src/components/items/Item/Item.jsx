import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import Card from '../../common/Card/Card';
import Line from '../../common/Line/Line';
import useStyles from './Item.styles';

export default function Item({ icon, size, title, link, children, small, ...others }) {
  const classes = useStyles();
  const Component = small ? Line : Card;
  const style = small ? {
    width: '60%',
  } : {
    width: 150,
    height: 150,
    maxHeight: 150,
    maxWidth: 150,
  };

  return (
    <Link to={link} className={cx(classes.itemContainer, {[classes.small]: small})} style={style} {...others}>
      <Component icon={!small ? icon : undefined} size={!small ? size : undefined} className={classes.card}>
        {title && (
          <div className={classes.title} style={{ textAlign: small ? 'left' : 'center' }}>
            {title}
          </div>
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
