import React from 'react';
import PropTypes from 'prop-types';
import { subgroupThemes } from '../../../../utils/constants';
import useStyles from './Label.styles';

export default function Label({ name, ...others }) {
  const classes = useStyles();

  return (
    <div
      className={classes.label}
      style={{
        ...subgroupThemes[name],
      }}
      {...others}
    >
      {name}
    </div>
  );
}

Label.propTypes = {
  name: PropTypes.string.isRequired,
};

