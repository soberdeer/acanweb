import React from 'react';
import useStyles from './Item.styles';

export default function Item() {
  const classes = useStyles();

  return (
    <div className={classes.itemContainer}/>
  );
}
