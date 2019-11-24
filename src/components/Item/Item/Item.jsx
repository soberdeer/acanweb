import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../common/Card/Card';
import useStyles from './Item.styles';

export default function Item({ icon, title }) {
  const classes = useStyles();

  return (
    <div className={classes.itemContainer}>
      <Card icon={icon} size={70} className={classes.card}>
        <div className={classes.title}>
          {title}
        </div>
      </Card>
    </div>
  );
}

Item.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
};

Item.defaultTypes = {
  icon: null,
  title: null,
};
