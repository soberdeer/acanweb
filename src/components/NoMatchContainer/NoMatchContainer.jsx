import React from 'react';
import NoMatch from '../common/NoMatch/NoMatch';
import useStyles from './NoMatchContainer.styles';

export default function SearchContainer() {
  const classes = useStyles();

  return (
    <div className={classes.noMatchContainer}>
      <NoMatch />
    </div>
  );
}
