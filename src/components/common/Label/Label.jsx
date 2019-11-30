import React from 'react';
import PropTypes from 'prop-types';
import { mappedSubgroupTheme } from '../../../utils/constants';
import useStyles from './Label.styles';

export default function Label({ name, children, ...others }) {
  const classes = useStyles();

  return (
    <div
      className={classes.label}
      style={{
        ...mappedSubgroupTheme[name],
      }}
      {...others}
    >
      {children}
    </div>
  );
}

Label.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Label.defaultProps = {
  children: null,
}

