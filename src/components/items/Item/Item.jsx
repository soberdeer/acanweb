import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../common/Card/Card';
import useStyles from './Item.styles';

export default function Item({ icon, size, title, children }) {
  const classes = useStyles();

  return (
    <div className={classes.itemContainer}>
      <Card icon={icon} size={size} className={classes.card}>
        {title && (
          <div className={classes.title}>
            {title}
          </div>
        )}
        {children}
      </Card>
    </div>
  );
}

Item.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.number,
  children: PropTypes.node,
};

Item.defaultTypes = {
  icon: null,
  size: 70,
  title: null,
  children: null,
};
