import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '../../common/Card/Card';
import useStyles from './Item.styles';

export default function Item({ icon, size, title, link, children, ...others }) {
  const classes = useStyles();

  return (
    <Link to={link} className={classes.itemContainer} {...others}>
      <Card icon={icon} size={size} className={classes.card}>
        {title && (
          <div className={classes.title}>
            {title}
          </div>
        )}
        {children}
      </Card>
    </Link>
  );
}

Item.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  size: PropTypes.number,
  children: PropTypes.node,
};

Item.defaultTypes = {
  icon: null,
  size: 70,
  title: null,
  link: '',
  children: null,
};
