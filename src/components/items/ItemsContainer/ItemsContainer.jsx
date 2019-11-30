import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Item from '../../items/Item/Item';
import useStyles from './ItemsContainer.styles';

export default function ItemsContainer({ data, small, className, ...others }) {
  const classes = useStyles();
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setTimeout(() => (
      setOpacity(1)), 100);
  }, []);

  const items = data.map((item, index) => {
    return <Item
      key={index}
      icon={item.key}
      title={item.name}
      link={item.link}
      size={70}
      small={small}
      style={{
        opacity,
        transitionDelay: `${index * 20}ms`,
        display: small ? 'flex' : 'block',
        justifyContent: 'center',
      }}
    />;
  });

  return (
    <div className={cx(classes.itemsContainer, className)} {...others}>
      <div
        className={classes.groupsContainer}
        style={{
          flexFlow: small ? 'column nowrap' : 'row wrap',
          display: small ? 'block' : 'flex',
          marginLeft: small ? 'auto' : 'unset',
          marginRight: small ? 'auto' : 'unset',
        }}
      >
        {items}
      </div>
    </div>
  );
}

ItemsContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  small: PropTypes.bool,
  className: PropTypes.string,
};

ItemsContainer.defaultProps = {
  data: [],
  small: false,
  className: null,
};

